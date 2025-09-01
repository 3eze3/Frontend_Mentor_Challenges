const $form = document.querySelector('.form');
const $inputs = $form.querySelectorAll('input, textarea');
export function validForm() {
    const $btn = document.getElementById('btn-submit');
    const $boxSent = document.querySelector('.success');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    $btn.addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;
        let radioChecked = false;
        $inputs.forEach(($input) => {
            $input.classList.remove('form__input-error');
            if ($input.type !== 'radio' &&
                $input.type !== 'checkbox' &&
                !$input.value.trim()) {
                $input.classList.add('form__input-error');
                isValid = false;
            }
            if ($input.type === 'email' && !emailRegex.test($input.value)) {
                $input.classList.add('form__input-error');
                isValid = false;
            }
            if ($input.type === 'radio' &&
                $input.name === 'query' &&
                $input.checked) {
                radioChecked = true;
            }
        });
        if (!radioChecked) {
            isValid = false;
            const $radioGroup = $form.querySelectorAll('input[type="radio"]');
            $radioGroup.forEach((r) => r.classList.add('form__input-error'));
        }
        const $checkbox = $form.querySelector('#checkbox');
        if (!$checkbox.checked) {
            $checkbox.classList.add('form__input-error');
            isValid = false;
        }
        if (isValid) {
            resetForm();
            $boxSent.classList.add('success-active');
            setTimeout(() => {
                $boxSent.classList.remove('success-active');
            }, 2000);
        }
    });
}
function resetForm() {
    $inputs.forEach(($input) => {
        if ($input.type === 'radio' || $input.type === 'checkbox') {
            $input.checked = false;
        }
        else {
            $input.value = '';
        }
        $input.classList.remove('error');
    });
}
