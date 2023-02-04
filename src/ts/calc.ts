const init = (): void => {

	const calc: HTMLElement = document.querySelector('.-calc-') as HTMLElement

	if (calc) {

		const select: HTMLSelectElement = calc.querySelector('.-calc-select-') as HTMLSelectElement
		const days: HTMLInputElement = calc.querySelector('.-calc-days-') as HTMLInputElement
		const months: HTMLInputElement = calc.querySelector('.-calc-months-') as HTMLInputElement
		const price: HTMLElement = calc.querySelector('.-calc-price-') as HTMLElement
	
		let currentPrice: number = 0
		let selectPrice: number = 0
		let daysPrice: number = 0
		let monthsPrice: number = 0
	
		const calculation = (): void => {
	
			selectPrice = 1
			daysPrice = 5200 * 4
			monthsPrice = 650 * 6
			currentPrice = (selectPrice * (daysPrice + monthsPrice))
			price.innerHTML = new Intl.NumberFormat('ru').format(currentPrice)
	
		}
	
		calculation()
	
		select.addEventListener('input', ((): void => {
	
			selectPrice = Number(select.value)
			currentPrice = (selectPrice * (daysPrice + monthsPrice))
			price.innerHTML = new Intl.NumberFormat('ru').format(currentPrice)
			
		}) as EventListener)
	
		days.addEventListener('input', ((): void => {
	
			daysPrice = 5200 * Number(days.value)
			currentPrice = (selectPrice * (daysPrice + monthsPrice))
			price.innerHTML = new Intl.NumberFormat('ru').format(currentPrice)
			
		}) as EventListener)
	
		months.addEventListener('input', ((): void => {
	
			monthsPrice = 650 * Number(months.value)
			currentPrice = (selectPrice * (daysPrice + monthsPrice))
			price.innerHTML = new Intl.NumberFormat('ru').format(currentPrice)
			
		}) as EventListener)
		
	}

}

export default { init }