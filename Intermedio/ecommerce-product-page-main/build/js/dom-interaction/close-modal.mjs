export function closeModal() {
    const $btnModal = document.querySelector('.modal__close');
    const $modal = document.querySelector('.modal');
    $btnModal.addEventListener('click', () => {
        $modal.classList.add("modal--close");
    });
}
