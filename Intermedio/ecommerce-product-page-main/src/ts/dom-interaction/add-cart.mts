import { PRICE_PRODUCT } from '../constant/price-product.mjs'
import { getAmountProduct } from '../utils/amount-product.mjs'
import { reset } from '../utils/reset.mjs'

export function addToCart() {
	const $btnAddProduct = document.querySelector(
		'.form__add-product'
	) as HTMLButtonElement
	let totalPrice = 0
	$btnAddProduct.addEventListener('click', (event) => {
		event.preventDefault()
		let $productAmount = getAmountProduct()
		if (parseInt($productAmount) <= 0) {
			reset()
			return
		}

		setAmountCart($productAmount)
		totalPrice = calculatePriceTotal(parseInt($productAmount))
		genereteProductCart($productAmount, totalPrice)
	})
}

function calculatePriceTotal(amount: number): number {
	return amount * PRICE_PRODUCT
}

function setAmountCart(amount: string) {
	const $amountCart = document.querySelector('.cart__number') as HTMLSpanElement
	$amountCart.textContent = amount
	$amountCart.classList.add('cart__number--active')
}

function genereteProductCart(amount: string, total: number) {
	const $amountProduct = document.querySelector(
		'.cart__amount-product'
	) as HTMLSpanElement
	const $totalProduct = document.querySelector(
		'.cart__total-product'
	) as HTMLSpanElement
	const $cartEmpy = document.querySelector('.cart__empty') as HTMLSpanElement
	const $container = document.querySelector('.cart__container') as HTMLElement

	$cartEmpy.classList.add('cart__empty--hidden')
	$container.classList.add('cart__container--open')
	$amountProduct.textContent = `x${amount}`
	$totalProduct.textContent = `$${total.toFixed(2)}`
}
