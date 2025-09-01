export function dropMenu() {
    const $button = document.querySelector('.header__btn');
    const $iconClose = document.querySelector('.header__icon--close');
    const $menu = document.querySelector('.nav');
    $button?.addEventListener('click', () => {
        $button?.classList.toggle('header__btn--active');
        $iconClose?.classList.toggle('header__icon--close--active');
        $menu?.classList.toggle('nav--active');
    });
}
export function toogle() {
    const $btntoogleFetures = document.getElementById('toogle-features');
    const $btnCompany = document.getElementById('toogle-company');
    const $sublistFeatures = document.querySelector('.sublist--features');
    const $sublistCompany = document.querySelector('.sublist--company');
    $btntoogleFetures.addEventListener('click', () => {
        $sublistFeatures.classList.toggle('sublist--features-active');
    });
    $btnCompany.addEventListener('click', () => {
        $sublistCompany.classList.toggle('sublist--company-active');
    });
}
