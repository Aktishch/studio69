const init = (): void => {

	const header: HTMLElement = document.querySelector('.-header-') as HTMLElement
	
	const scrollHeader = (): void => {
		
		let currentScrollPos: number = window.pageYOffset
		let headerHeight: number = header.clientHeight

		headerHeight < currentScrollPos ? header.classList.add('bg-white') : header.classList.remove('bg-white')

	}

	scrollHeader()

	document.addEventListener('scroll', scrollHeader as EventListener)

}

export default { init }