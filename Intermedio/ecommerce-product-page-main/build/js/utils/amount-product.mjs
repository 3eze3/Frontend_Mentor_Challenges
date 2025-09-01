const $quantityProduct = document.querySelector('.form__input');
export function getAmountProduct() {
    return $quantityProduct.value;
}
export function setAmountProduct(amount) {
    $quantityProduct.value = amount;
}
