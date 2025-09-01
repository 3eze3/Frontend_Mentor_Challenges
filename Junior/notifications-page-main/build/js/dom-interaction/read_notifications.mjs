export function readNotifications() {
    const $btn = document.getElementById('mark-all');
    const $notificationNumber = document.querySelector('.header__number');
    const $notificationActive = document.querySelectorAll('.notification-active');
    const $notificationDescriptin = document.querySelectorAll('.notification__description');
    $btn.addEventListener('click', () => {
        if ($notificationActive.length == 0)
            return;
        $notificationNumber.textContent = '0';
        $notificationActive.forEach((notification, index) => {
            notification.classList.remove('notification-active');
            $notificationDescriptin[index]?.classList.remove('notification__description-active');
        });
    });
}
