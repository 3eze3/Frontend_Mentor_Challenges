import { resetCount } from '../dom-interaction/quantity-product.mjs'

export function reset() {
	const $amountCart = document.querySelector('.cart__number') as HTMLSpanElement
	$amountCart.classList.remove('cart__number--active')
	const $cartEmpy = document.querySelector('.cart__empty') as HTMLSpanElement
	const $container = document.querySelector('.cart__container') as HTMLElement
	$cartEmpy.classList.remove('cart__empty--hidden')
	$container.classList.remove('cart__container--open')
	resetCount()
}
