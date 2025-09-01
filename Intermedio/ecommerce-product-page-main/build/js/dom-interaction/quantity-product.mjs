import { setAmountProduct } from '../utils/amount-product.mjs';
let numbProduct = 0;
export function resetCount() {
    numbProduct = 0;
    setAmountProduct('0');
}
export function productStock() {
    incrementsProduct();
    decrementProduct();
}
const incrementsProduct = () => {
    const $buttonIncrement = document.getElementById('increment');
    $buttonIncrement.addEventListener('click', (event) => {
        event?.preventDefault();
        if (numbProduct >= 1000)
            return;
        numbProduct++;
        setAmountProduct(numbProduct.toString());
    });
};
const decrementProduct = () => {
    const $buttonDecrement = document.getElementById('decrement');
    $buttonDecrement.addEventListener('click', (event) => {
        event?.preventDefault();
        if (numbProduct <= 0)
            return;
        numbProduct--;
        setAmountProduct(numbProduct.toString());
    });
};
