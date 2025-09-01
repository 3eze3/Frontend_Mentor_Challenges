import { reset } from '../utils/reset.mjs';
export function removeProduct() {
    const $btnRemove = document.querySelector('.cart__remove-btn');
    $btnRemove.addEventListener('click', (event) => {
        event.preventDefault();
        reset();
    });
}
