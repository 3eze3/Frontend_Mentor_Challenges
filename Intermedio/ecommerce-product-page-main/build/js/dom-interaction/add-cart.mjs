import { PRICE_PRODUCT } from '../constant/price-product.mjs';
import { getAmountProduct } from '../utils/amount-product.mjs';
import { reset } from '../utils/reset.mjs';
export function addToCart() {
    const $btnAddProduct = document.querySelector('.form__add-product');
    let totalPrice = 0;
    $btnAddProduct.addEventListener('click', (event) => {
        event.preventDefault();
        let $productAmount = getAmountProduct();
        if (parseInt($productAmount) <= 0) {
            reset();
            return;
        }
        setAmountCart($productAmount);
        totalPrice = calculatePriceTotal(parseInt($productAmount));
        genereteProductCart($productAmount, totalPrice);
    });
}
function calculatePriceTotal(amount) {
    return amount * PRICE_PRODUCT;
}
function setAmountCart(amount) {
    const $amountCart = document.querySelector('.cart__number');
    $amountCart.textContent = amount;
    $amountCart.classList.add('cart__number--active');
}
function genereteProductCart(amount, total) {
    const $amountProduct = document.querySelector('.cart__amount-product');
    const $totalProduct = document.querySelector('.cart__total-product');
    const $cartEmpy = document.querySelector('.cart__empty');
    const $container = document.querySelector('.cart__container');
    $cartEmpy.classList.add('cart__empty--hidden');
    $container.classList.add('cart__container--open');
    $amountProduct.textContent = `x${amount}`;
    $totalProduct.textContent = `$${total.toFixed(2)}`;
}
