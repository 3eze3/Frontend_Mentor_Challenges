export function show() {
    const main = document.querySelector('.main');
    const submit = document.getElementById('submit');
    submit?.addEventListener('click', (e) => {
        e.preventDefault();
        main?.classList.add('main-back');
    });
}
