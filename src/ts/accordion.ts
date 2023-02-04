const getAccordion = (element: Element): void => {

    const accordion: HTMLElement = element as HTMLElement
    const toggle: HTMLElement = accordion.querySelector('*[data-toggle]') as HTMLElement
    const content: HTMLElement = accordion.querySelector('*[data-content]') as HTMLElement

    const getAccordionHeight = (): void => {

        if (accordion.dataset.accordion == 'hidden') {

            content.style.height = '0'

        } else {

            content.style.height = `${content.scrollHeight}px`

        }

    }

    content.classList.add('overflow-hidden')

    getAccordionHeight()

    toggle.addEventListener('click', ((): void => {

        if (accordion.dataset.accordion == 'hidden') {

            accordion.dataset.accordion = 'active'

            getAccordionHeight()

        } else {

            accordion.dataset.accordion = 'hidden'

            getAccordionHeight()

        }

    }) as EventListener)

}

const init = (): void => {

    const accordions: NodeListOf<Element> = document.querySelectorAll('*[data-accordion]')

    accordions.forEach((element: Element): void => {

        getAccordion(element as HTMLElement)

    })

}

export default { init }