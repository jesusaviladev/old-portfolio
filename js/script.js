console.log('Mi portafolio')

const portfolioData = [
	{
		id: 1,
		link: 'https://genteconestilomexico.com/',
		image: 'assets/images/1.webp',
		thumbnail: 'assets/images/thumb1.jpg',
		title: 'Web de Gente con estilo Mexico',
		description: 'Pagina web de comercio electrónico, realizada con HTML, CSS y JavaScript'
	},
	{
		id: 2,
		link: 'https://www.activa941fm.com/',
		image: 'assets/images/2.webp',
		thumbnail: 'assets/images/thumb2.jpg',
		title: 'Reproductor de radio online',
		description: 'Reproductor de audio para radio online realizado en JavaScript'
	},
	{
		id: 3,
		link: 'https://jesusaviladev.github.io/proyectos/menu/',
		image: 'assets/images/3.webp',
		thumbnail: 'assets/images/thumb3.jpg',
		title: 'Menú de elementos JavaScript',
		description: 'Menú de comidas realizado en JavaScript, como práctica para freecodecamp.org'
	},
	{
		id: 4,
		link: 'https://jesusaviladev.github.io/DoomLikeEngine',
		image: 'assets/images/4.webp',
		thumbnail: 'assets/images/thumb4.jpg',
		title: 'Motor gráfico pseudo 3D',
		description: 'Motor gráfico para videojuego pseudo 3D realizado usando la técnica de Raycasting en JavaScript. Basado en el motor gráfico de Doom y Wolfenstein 3D'
	},
	{
		id: 5,
		link: 'https://jesusaviladev.github.io/proyectos/profile-card-component//',
		image: 'assets/images/5.webp',
		thumbnail: 'assets/images/thumb5.jpg',
		title: 'Diseño de un componente para perfil de usuario',
		description: 'Diseño de componente para perfil de usuario realizado en HTML y CSS como práctica para los retos de frontendmentor.io'
	},
	{
		id: 6,
		link: 'https://jesusaviladev.github.io/proyectos/faq-accordion/',
		image: 'assets/images/6.webp',
		thumbnail: 'assets/images/thumb6.jpg',
		title: 'Diseño de componente para preguntas frecuentes',
		description: 'Componente para preguntas frecuentes realizado en HTML, CSS y JavaScript como práctica para los retos de frontendmentor.io'
	},
	{
		id: 7,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/7.jpg',
		thumbnail: 'assets/images/7.jpg',
		title: 'Reproductor de radio online',
		description: 'Reproductor de audio para radio online realizado en JavaScript'
	},
	{
		id: 8,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/8.jpg',
		thumbnail: 'assets/images/8.jpg',
		title: 'Reproductor de radio online',
		description: 'Reproductor de audio para radio online realizado en JavaScript'
	},
	{
		id: 9,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/9.jpg',
		thumbnail: 'assets/images/9.jpg',
		title: 'Reproductor de radio online',
		description: 'Reproductor de audio para radio online realizado en JavaScript'
	}
]

//Menu pegajoso
const menu = document.querySelector('.header')
const menuHeight = menu.offsetTop;
window.addEventListener('scroll', ()=>{
	(pageYOffset > menuHeight) ? menu.classList.add('header--fixed') : menu.classList.remove('header--fixed')
})

// Menu de moviles
const menuToggle = document.querySelector('.header__toggle')
const menuBar = document.querySelector('.topbar')
menuToggle.addEventListener('click', (e)=>{
	menuBar.classList.toggle('topbar--show')
})

//funcion para elementos del modal 
const getModalElement = (id) => {
	const [ modalElement ] = portfolioData.filter((element)=> element.id == id)
	const { title, image, description, link  } = modalElement

	const fragment = document.createDocumentFragment()
	const template = document.getElementById('template').content
	const container = document.querySelector('.modal__container')

	while(container.firstElementChild){
		container.removeChild(container.lastElementChild)
	}

	template.querySelector('.modal__title').textContent = title
	template.querySelector('.modal__image').src = image
	template.querySelector('.modal__description').textContent = description
	template.querySelector('.modal__link').href = link

	let newTemplate = template.cloneNode(true)
	fragment.appendChild(newTemplate)

	container.appendChild(fragment)
}

//eventos del click
const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', (e)=>{
	const element = e.target
	if(element.classList.contains('gallery__image')){
		const id = element.dataset.id
		const modal = document.querySelector('.modal')
		modal.classList.add('modal--show')
		document.body.style.overflowY = 'hidden'
		getModalElement(id)

		modal.addEventListener('click', (e)=>{
			const element = e.target
			if(element.classList.contains('modal') || element.classList.contains('fa-times-circle')){
				e.preventDefault()
				modal.classList.remove('modal--show')
				document.body.style.overflowY = 'scroll'
			}
		})
	}
})


//ocultar mensajes nuevamente
const clearMessage = (element) => {
	setTimeout(()=>{
		element.classList.remove('contact__message--show')
		element.textContent = ''
	}, 6000)
}
//mostrar mensajes
const displayMessage = (message) => {
	const status = document.querySelector('.contact__message')
	status.textContent = message
	status.classList.add('contact__message--show')
	clearMessage(status)
}

//funcion para validar formulario
const validateForm = (form) => {

	const name = form.name.value.trim()
	const email = form.email.value.trim()
	const message = form.message.value.trim()

	if(name !== '' && email !== '' && message !== '') return true
		else return false

}

//enviar formulario
const sendForm = (dataForm) => {
	const formAPI = "https://formspree.io/f/xqkwakrk"
	return fetch(formAPI, {
			method: 'POST',
			body: dataForm,
			headers: {
	            'Accept': 'application/json'
	        }
		})
}	

//funcion para manejar el formulario
 const handleSubmit = (event) => {
	event.preventDefault()
	const form = event.target

	const formIsValid = validateForm(form)

	if(formIsValid){

	let data = new FormData(event.target)

	sendForm(data)
		.then(response => {
			if(response.ok){
				displayMessage('¡Tu mensaje ha sido enviado con éxito!')
				form.reset()
			}

			else{
				displayMessage('Debes llenar todos los campos')
			}
			
		})
		.catch(error => {
			console.log(error)
			displayMessage('Ha ocurrido un error de conexión')
		})
	}

	else {
		displayMessage('Debes llenar todos los campos')
	}
	
}

//eventos del formulario
const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit)

//scroll
const links = document.querySelectorAll('.menu__links')
links.forEach(link=>{
	link.addEventListener('click', (e)=>{
		e.preventDefault()
		const id = link.getAttribute('href').slice(1)
		const navBar = document.querySelector('.header')
		const navHeight = navBar.clientHeight
		let position = document.getElementById(id).offsetTop - navHeight

		if(!navBar.classList.contains('header__fixed')){
			position -= navHeight
		}

		window.scrollTo({
			left: 0,
			top: position,
			behavior: 'smooth'
		})

		menuBar.classList.remove('topbar--show')
	})
})

//get date
const dateContainer = document.querySelector('.date')
const year = new Date().getFullYear()
dateContainer.textContent = `Copyright © ${year} - ${year + 1}`

