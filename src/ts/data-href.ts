const anchorTransition = (event: Event): void => {

    event.preventDefault()

    const id: string = String((event.target as HTMLAnchorElement).getAttribute('href'))
    const scrollToBlock: HTMLElement = document.querySelector(id) as HTMLElement
    
    let headerHeight: number = (document.querySelector('.-header-') as HTMLElement).clientHeight
    let scrollToBlockPosition: number = scrollToBlock.getBoundingClientRect().top
    let offsetPosition: number = scrollToBlockPosition + window.pageYOffset - headerHeight

    window.scrollTo({

        top: offsetPosition,
        behavior: 'smooth'

    })

}

const init = (): void => {

    document.addEventListener('click', ((event: Event): void => {

        if ((event.target as HTMLElement).hasAttribute('data-href')) anchorTransition(event)

    }) as EventListener)

}

export default { init }