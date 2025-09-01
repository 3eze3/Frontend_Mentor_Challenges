const $quantityProduct = document.querySelector(
	'.form__input'
) as HTMLInputElement

export function getAmountProduct() {
	return $quantityProduct.value
}

export function setAmountProduct(amount: string) {
	$quantityProduct.value= amount
}
