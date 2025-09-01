export function dropMenu(): void {
	const $button = document.querySelector('.header__btn')
	const $iconClose = document.querySelector('.header__icon--close')
	const $menu = document.querySelector('.nav')
	$button?.addEventListener('click', () => {
		$button?.classList.toggle('header__btn--active')
		$iconClose?.classList.toggle('header__icon--close--active')
		$menu?.classList.toggle('nav--active')
	})
}

export function toogle(): void {
	const $btntoogleFetures = document.getElementById(
		'toogle-features'
	) as HTMLButtonElement
	const $btnCompany = document.getElementById(
		'toogle-company'
	) as HTMLButtonElement
	const $sublistFeatures = document.querySelector(
		'.sublist--features'
	) as HTMLUListElement
	//
	const $sublistCompany = document.querySelector(
		'.sublist--company'
	) as HTMLUListElement
	$btntoogleFetures.addEventListener('click', () => {
		$sublistFeatures.classList.toggle('sublist--features-active')
	})
	$btnCompany.addEventListener('click', () => {
		$sublistCompany.classList.toggle('sublist--company-active')
	})
}
