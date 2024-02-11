declare global {

    interface Window {

        Fancybox: any
        ym: any

    }

}

const validateForm = (form: HTMLFormElement): boolean => {

    const labels: NodeListOf<Element> = form.querySelectorAll('.-validate-label-')
    const file: HTMLInputElement = form.querySelector('.-download-file-') as HTMLInputElement

    let validate: boolean = true
    
    const fileChange = (): void => {

        (file.files as FileList).length == 0 ? validate = false : validate = true

    }

    if (file) {

        fileChange()
        file.addEventListener('change', fileChange as EventListener)

    }

    labels.forEach((element: Element): void => {

        const label: HTMLLabelElement = element as HTMLLabelElement
        const input: HTMLInputElement = label.querySelector('.-validate-input-') as HTMLInputElement
        const error: HTMLElement = label.querySelector('.-validate-error-') as HTMLElement

        const inputFocus = (): void => {

            input.focus()
            input.classList.add('input--error')
            error.classList.remove('anim--fade')
            validate = false

        }

        const maxLengthInputTel = (numb: number): void => {

            if (input.value.length > 0 && input.value.length < numb) {

                error.innerText = 'Введите корректный номер!'

                inputFocus()

            }

        }

        if (input.value == null || input.value == '' || input.value.length == 0) {

            inputFocus()

        } else {

            input.classList.remove('input--error')
            error.classList.add('anim--fade')

        }

        if (input.classList.contains('-input-name-')) {

            if (input.value.length == 1) inputFocus()

        }

        if (input.classList.contains('-input-tel-')) {

            if (input.value[1] == '7') {

                maxLengthInputTel(18)

            } else if (input.value[0] == '8') {

                maxLengthInputTel(17)

            } else if (input.value[1] !== '7') {

                maxLengthInputTel(11)

            } else {

                error.innerText = 'Пожалуйста, введите ваш номер!'

            }

        }

        if (input.classList.contains('-input-number-')) {
            
            if (Number(input.value) < 18) inputFocus()
            
        }

        if (input.classList.contains('-input-textarea-')) {

            if (input.value.length > 0 && input.value.length < 10) {

                error.innerText = 'Введите не менее 10 символов!'

                inputFocus()

            } else {

                error.innerText = 'Пожалуйста, напишите вопрос!'

            }

        }

        input.addEventListener('input', ((): void => {

            if (input.value.length > 0) {

                input.classList.remove('input--error')
                error.classList.add('anim--fade')

            }

        }) as EventListener, { once: true })

    })

    return validate

}

const formSubmit = (event: Event): void => {

    event.preventDefault()

    const form: HTMLFormElement = event.target as HTMLFormElement

    if (validateForm(form)) {

        const formData: FormData = new FormData(form)
        const requestUrl: string = '/php/submit.php'
        const submitBtn: HTMLButtonElement = form.querySelector('button[type="submit"]') as HTMLButtonElement

        submitBtn.setAttribute('disabled', 'disabled')

        fetch(requestUrl, {

            method: 'POST',
            body: formData

        }).then((result: Response): void => {

            result.text()

        }).then((): void => {

            window.ym(66526738, 'reachGoal', 'zayavka')

            window.Fancybox.close()

            window.Fancybox.show([{

                src: '/dialogs/dialog-submit.php',
                type: 'ajax',
                dragToClose: false,
                mainClass: 'fancybox-modal'

            }])

            form.reset()

            submitBtn.removeAttribute('disabled')

        }).catch((error: string): void =>

            console.log('The form has not been sent', error)

        )

    }

}

const init = (): void => {

    document.addEventListener('submit', ((event: Event): void => {

        if ((event.target as HTMLFormElement).classList.contains('-validate-form-')) formSubmit(event)

    }) as EventListener)

}

export default { init }