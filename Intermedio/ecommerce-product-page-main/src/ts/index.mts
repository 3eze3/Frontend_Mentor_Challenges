import { addToCart } from './dom-interaction/add-cart.mjs'
import { checkoutProduct } from './dom-interaction/checkout-btn.mjs'
import { displayCart } from './dom-interaction/display-cart.mjs'
import { menuMobile } from './dom-interaction/menu-mobile.mjs'
import { modal } from './dom-interaction/modal.mjs'
import { productStock } from './dom-interaction/quantity-product.mjs'
import { removeProduct } from './dom-interaction/remove-product.mjs'

class Main {
	public static main() {
		displayCart()
		productStock()
		addToCart()
		removeProduct()
		checkoutProduct()
		modal()
		menuMobile()
	}
}

Main.main()
