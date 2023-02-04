const inputName = (event: Event): void => {

    const input: HTMLInputElement = event.target as HTMLInputElement
    const alphaExp: RegExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(alphaExp)) input.value = input.value.replace(alphaExp, '')

}

const inputNumber = (event: Event): void => {

    const input: HTMLInputElement = event.target as HTMLInputElement
    input.value = input.value.replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

}

const init = (): void => {

    const forms: NodeListOf<Element> = document.querySelectorAll('.-validate-form-')

    forms.forEach((element: Element): void => {

        const form: HTMLFormElement = element as HTMLFormElement
        const download: HTMLLabelElement = form.querySelector('.-download-') as HTMLLabelElement

        if (download) {

            const file: HTMLInputElement = download.querySelector('.-download-file-') as HTMLInputElement
            const text: HTMLElement = download.querySelector('.-download-text-') as HTMLElement
    
            const fileChange = (): void => {
    
                if ((file.files as FileList).length > 0) {
                    
                    text.innerText = 'Загружено'
        
                }
        
            }
        
            fileChange()
            file.addEventListener('change', fileChange as EventListener)

        }

    })

    document.addEventListener('input', ((event: Event): void => {

        if ((event.target as HTMLElement).classList.contains('-input-name-')) inputName(event)

        if ((event.target as HTMLElement).classList.contains('-input-number-')) inputNumber(event)

    }) as EventListener)

}

export default { init }