export function readNotifications() {
	const $btn = document.getElementById('mark-all') as HTMLButtonElement
	const $notificationNumber = document.querySelector(
		'.header__number'
	) as HTMLSpanElement
	const $notificationActive = document.querySelectorAll(
		'.notification-active'
	) as NodeListOf<HTMLLIElement>
	const $notificationDescriptin = document.querySelectorAll(
		'.notification__description'
	) as NodeListOf<HTMLElement>

	$btn.addEventListener('click', () => {
		if ($notificationActive.length == 0) return
		$notificationNumber.textContent = '0'
		$notificationActive.forEach((notification, index) => {
			notification.classList.remove('notification-active')
			$notificationDescriptin[index]?.classList.remove(
				'notification__description-active'
			)
		})
	})
}
