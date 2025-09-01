export function animationInput() {
	const $inputs = document.querySelectorAll(
		'.form__input'
	) as NodeListOf<HTMLInputElement>
	const $label = document.querySelectorAll(
		'.form__label'
	) as NodeListOf<HTMLLabelElement>
	$inputs.forEach(($input, index) => {
		$input.addEventListener('input', () => {
			const texto = $input.value
			$label[index]?.classList.toggle('form__label--active', texto.trim() != '')
		})
	})
}
