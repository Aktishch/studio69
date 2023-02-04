interface coordinates {

    top: number,
    left: number

}

const waved = (event: MouseEvent): void => {

    const wavedItem: HTMLElement = (event.target as HTMLElement).closest('.-waved-') as HTMLElement
    const circle: HTMLDivElement = document.createElement('div') as HTMLDivElement

    const coordinat: coordinates = {

        top: event.clientY - wavedItem.getBoundingClientRect().top,
        left: event.clientX - wavedItem.getBoundingClientRect().left

    }

    circle.classList.add('circle')
    circle.style.top = `${coordinat.top}px`
    circle.style.left = `${coordinat.left}px`

    wavedItem.appendChild(circle)
    wavedItem.focus()

    setTimeout((): void => circle.remove(), 1000)

}

const init = (): void => {

    document.addEventListener('click', ((event: MouseEvent): void => {

        if ((event.target as HTMLElement).closest('.-waved-')) waved(event)

    }) as EventListener)

}

export default { init }