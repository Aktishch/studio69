interface coordinates {

	top: number,
	left: number

}

const offset = (item: HTMLElement): coordinates => {

	const top: number = item.getBoundingClientRect().top
	const left: number = item.getBoundingClientRect().left
	const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop
	const scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft

	const coordinat: coordinates = {

		top: top + scrollTop,
		left: left + scrollLeft

	}

	return coordinat

}

const animationOnScroll = (): void => {

	const items: NodeListOf<Element> = document.querySelectorAll('.-scroll-')

	items.forEach((element: Element): void => {

		const item: HTMLElement = element as HTMLElement
		const itemHeight: number = item.offsetHeight
		const itemOffsetTop: number = offset(item).top
		const screenPosition: number = 3

		let point: number = window.innerHeight - itemHeight / screenPosition

		if (point > window.innerHeight) point = window.innerHeight - window.innerHeight / screenPosition

		if (window.pageYOffset > itemOffsetTop - point && window.pageYOffset < itemOffsetTop + itemHeight) item.classList.add('-show-')

	})

}

const init = (): void => {

	animationOnScroll()

	document.addEventListener('scroll', animationOnScroll as EventListener)

}

export default { init }