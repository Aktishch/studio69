// import scrollBar from './scrollBar'

const init = (): void => {

    const limit = document.querySelector('.-limit-') as HTMLElement

    if (!limit) return

    if (sessionStorage.getItem('limit') && sessionStorage.getItem('limit') == 'positive') {

        limit.remove()

    } else {

        setTimeout((): void => limit.classList.remove('visibility-hidden', 'fade-0'), 5000)

    }

    const btn = limit.querySelector('.-limit-btn-') as HTMLButtonElement

    btn.addEventListener('click', ((): void => {

        sessionStorage.setItem('limit', 'positive')
        limit.classList.add('visibility-hidden', 'fade-0')

    }) as EventListener)

    // const ages = document.querySelector('.-ages-') as HTMLElement
    // let status: string = 'not'

    // if (!ages) return

    // const yes = ages.querySelector('.-ages-yes-') as HTMLButtonElement
    // const not = ages.querySelector('.-ages-not-') as HTMLButtonElement

    // ages.classList.remove('visibility-hidden')
    // ages.classList.remove('fade-0')

    // scrollBar.destroy()

    // yes.addEventListener('click', ((): void => {

    //     status = 'yes'
    //     sessionStorage.setItem('status', status)

    //     ages.classList.add('visibility-hidden')
    //     ages.classList.add('fade-0')

    //     setTimeout((): void => {

    //         scrollBar.init()
    //         ages.remove()

    //     }, 800)

    // }) as EventListener)

    // not.addEventListener('click', ((): void => {

    //     let myWindow = window.open('', '_self') as Window
    //     myWindow.document.write('')
    //     setTimeout(() => myWindow.close(), 1000)

    // }) as EventListener)

    // if (sessionStorage.getItem('status')) {

    //     status = String(sessionStorage.getItem('status'))

    //     if (status == 'yes') {

    //         scrollBar.init()
    //         ages.remove()

    //     }

    // }

}

export default { init }