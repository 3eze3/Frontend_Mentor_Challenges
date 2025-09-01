export function modal() {
	const $btnModal = document.querySelector('.modal__close') as HTMLButtonElement
	const $gallery = document.querySelector('.gallery__images') as HTMLButtonElement
	const $modal = document.querySelector('.modal') as HTMLButtonElement
	const $next = document.querySelector(
		'.gallery__row--previous'
	) as HTMLButtonElement
	const $prev = document.querySelector(
		'.gallery__row--next'
	) as HTMLButtonElement
	const imageWidth = 530
	const $imagesContainer = document.querySelector(
		'.modal__images'
	) as HTMLElement

	$btnModal.addEventListener('click', () => {
		$modal.classList.remove('modal--open')
	})

	$gallery.addEventListener('click', () => {
		$modal.classList.add('modal--open')
	})

	$next.addEventListener('click', () => {
		$imagesContainer.scrollBy({ left: imageWidth, behavior: 'smooth' })
	})

	$prev.addEventListener('click', () => {
		$imagesContainer.scrollBy({ left: -imageWidth, behavior: 'smooth' })
	})
}
