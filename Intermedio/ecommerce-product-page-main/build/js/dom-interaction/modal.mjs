export function modal() {
    const $btnModal = document.querySelector('.modal__close');
    const $gallery = document.querySelector('.gallery__images');
    const $modal = document.querySelector('.modal');
    const $next = document.querySelector('.gallery__row--previous');
    const $prev = document.querySelector('.gallery__row--next');
    const imageWidth = 530;
    const $imagesContainer = document.querySelector('.modal__images');
    $btnModal.addEventListener('click', () => {
        $modal.classList.remove('modal--open');
    });
    $gallery.addEventListener('click', () => {
        $modal.classList.add('modal--open');
    });
    $next.addEventListener('click', () => {
        $imagesContainer.scrollBy({ left: imageWidth, behavior: 'smooth' });
    });
    $prev.addEventListener('click', () => {
        $imagesContainer.scrollBy({ left: -imageWidth, behavior: 'smooth' });
    });
}
