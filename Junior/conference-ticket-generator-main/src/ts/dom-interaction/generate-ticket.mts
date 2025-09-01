export function generateTicket() {
	const main = document.querySelector('.main')
	const submit = document.getElementById('submit')
	const $inputEmail = document.getElementById('email') as HTMLInputElement
	const $errorEmail = document.querySelector(
		'.form__specification-email'
	) as HTMLSpanElement
	const dropZone = document.querySelector('.form__drop-zone')
	const input = document.querySelector('.form__drop-input') as HTMLInputElement
	const prompt = document.querySelector('.form__drop-prompt')
	const coverLogo = document.querySelector('.form__cover-logo')
	//
	const imageAvatar = document.getElementById('avatar') as HTMLImageElement

	const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	// Función para procesar la imagen
	const handleFile = (file: File) => {
		if (!file.type.startsWith('image/')) return
		if (file.size > 500 * 1024) return

		const reader = new FileReader()
		reader.onload = (e) => {
			const img = document.createElement('img')
			img.src = e.target?.result as string
			imageAvatar.src = e.target?.result as string
			img.classList.add('form__preview-image')
			if (coverLogo) coverLogo.innerHTML = ''
			coverLogo?.appendChild(img)
			if (prompt) prompt.textContent = 'Image uploaded successfully'
		}
		reader.readAsDataURL(file)
	}

	submit?.addEventListener('click', (e) => {
		e.preventDefault()
		const email = $inputEmail.value.trim()
		if (!email || !email.match(re)) {
			$errorEmail?.classList.add('form__specification-email-active')
			return
		}
		$errorEmail?.classList.remove('form__specification-email-active')

		main?.classList.add('main-back')
	})

	// Drag and drop
	if (dropZone) {
		;['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
			dropZone.addEventListener(eventName, (e) => e.preventDefault())
		})
		;['dragenter', 'dragover'].forEach((eventName) => {
			dropZone.addEventListener(eventName, () =>
				dropZone.classList.add('form__drop-zone--active')
			)
		})
		;['dragleave', 'drop'].forEach((eventName) => {
			dropZone.addEventListener(eventName, () =>
				dropZone.classList.remove('form__drop-zone--active')
			)
		})

		dropZone.addEventListener('drop', (e) => {
			const files = e.dataTransfer?.files
			if (files && files.length > 0) {
				handleFile(files[0])
			}
		})

		// Click para abrir input
		dropZone.addEventListener('click', () => input?.click())
	}

	// Cuando se elige archivo manualmente
	input?.addEventListener('change', (e) => {
		const file = (e.target as HTMLInputElement).files?.[0]
		if (file) handleFile(file)
	})
}
