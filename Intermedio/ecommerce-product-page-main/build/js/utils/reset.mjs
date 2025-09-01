import { resetCount } from '../dom-interaction/quantity-product.mjs';
export function reset() {
    const $amountCart = document.querySelector('.cart__number');
    $amountCart.classList.remove('cart__number--active');
    const $cartEmpy = document.querySelector('.cart__empty');
    const $container = document.querySelector('.cart__container');
    $cartEmpy.classList.remove('cart__empty--hidden');
    $container.classList.remove('cart__container--open');
    resetCount();
}
