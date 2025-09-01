export function menuMobile() {
	const $nav = document.querySelector('.nav') as HTMLElement
	const $ul = document.querySelector('.nav__list') as HTMLUListElement

	const $btnOpen = document.querySelector('.header__menu') as HTMLButtonElement
	const $logoOpen = document.querySelector(
		'.header__menu-open'
	) as HTMLButtonElement
	const $logoClose = document.querySelector(
		'.header__menu-close'
	) as HTMLButtonElement

	$btnOpen.addEventListener('click', () => {
		$logoOpen.classList.toggle('header__menu-open-active')
		$logoClose.classList.toggle('header__menu-close-active')
		$nav.classList.toggle('nav-active')
		$ul.classList.toggle('nav__list-active')
	})
}
