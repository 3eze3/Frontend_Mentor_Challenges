export function displayCart() {
	const $toggleBtn = document.querySelector(
		'.cart__toggle-btn'
	) as HTMLButtonElement
	const $cartMenu = document.querySelector('.cart__resume') as HTMLElement

	$toggleBtn?.addEventListener('click', () => {
		$cartMenu.classList.toggle('cart__resume--open')
	})
}
