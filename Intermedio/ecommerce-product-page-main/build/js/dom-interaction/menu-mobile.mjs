export function menuMobile() {
    const $nav = document.querySelector('.nav');
    const $ul = document.querySelector('.nav__list');
    const $btnOpen = document.querySelector('.header__menu');
    const $logoOpen = document.querySelector('.header__menu-open');
    const $logoClose = document.querySelector('.header__menu-close');
    $btnOpen.addEventListener('click', () => {
        $logoOpen.classList.toggle('header__menu-open-active');
        $logoClose.classList.toggle('header__menu-close-active');
        $nav.classList.toggle('nav-active');
        $ul.classList.toggle('nav__list-active');
    });
}
