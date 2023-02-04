const phoneMask = (event: Event): void => {

    const input: HTMLInputElement = event.target as HTMLInputElement
    const matrix: string = '+7 (___) ___-__-__'
    const def: string = matrix.replace(/\D/g, '')

    let value: string = input.value.replace(/\D/g, '')
    let i: number = 0

    if (def.length >= value.length) value = def

    input.value = matrix.replace(/./g, (e: string): string => {

        return /[_\d]/.test(e) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : e

    })

    input.addEventListener('blur', (): void => {

        if (input.value.length == 2) input.value = ''

    })

}

const init = (): void => {

    document.addEventListener('input', ((event: InputEvent): void => {

        if ((event.target as HTMLInputElement).getAttribute('type') == 'tel') phoneMask(event)

    }) as EventListener)

}

export default { init }