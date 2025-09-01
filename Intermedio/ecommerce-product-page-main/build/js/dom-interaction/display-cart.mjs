export function displayCart() {
    const $toggleBtn = document.querySelector('.cart__toggle-btn');
    const $cartMenu = document.querySelector('.cart__resume');
    $toggleBtn?.addEventListener('click', () => {
        $cartMenu.classList.toggle('cart__resume--open');
    });
}
