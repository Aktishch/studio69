const init = (): void => {

    const ranges: NodeListOf<Element> = document.querySelectorAll('.-range-')

    ranges.forEach((element: Element): void => {

        const range: HTMLElement = element as HTMLElement
        const input: HTMLOutputElement = range.querySelector('.-range-input-') as HTMLOutputElement
        const circle: HTMLInputElement = range.querySelector('.-range-circle-') as HTMLInputElement
        const line: HTMLElement = range.querySelector('.-range-line-') as HTMLElement
        const bubble: HTMLOutputElement = range.querySelector('.-range-bubble-') as HTMLOutputElement

        const setBubble = (rangeCircle: HTMLInputElement, rangeBubble: HTMLOutputElement): void => {

            const value: number = Number(rangeCircle.value)
            const min: number = rangeCircle.min ? Number(rangeCircle.min) : 0
            const max: number = rangeCircle.max ? Number(rangeCircle.max) : 100
            const newValue: number = ((value - min) * 100) / (max - min)

            rangeBubble.innerHTML = String(value)
            rangeBubble.style.left = `calc(${newValue}% + (${14 - newValue * 0.3}px))`
            line.style.width = `calc(${newValue}% + (${14 - newValue * 0.3}px))`

        }

        const rangeInput = () => {

            setBubble(circle, bubble)
            input.value = circle.value

        }

        rangeInput()

        circle.addEventListener('input', rangeInput as EventListener)

    })

}

export default { init }