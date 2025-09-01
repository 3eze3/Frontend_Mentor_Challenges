import { reset } from '../utils/reset.mjs';
export function checkoutProduct() {
    const $bntCheckout = document.querySelector('.cart__checkout-btn');
    $bntCheckout.addEventListener('click', (event) => {
        event.preventDefault();
        reset();
    });
}
