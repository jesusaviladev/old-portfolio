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
		link: 'https://jesusaviladev.github.io/proyectos/huddle-landing',
		image: 'assets/images/7.png',
		thumbnail: 'assets/images/thumb7.jpg',
		title: 'Landing page',
		description: 'Landing page para Huddle.com, diseño realizado como un reto de frontendmentor.io'
	},
	{
		id: 8,
		link: 'https://jesusaviladev.github.io/proyectos/card-slider/',
		image: 'assets/images/8.png',
		thumbnail: 'assets/images/thumb8.jpg',
		title: 'Slider de cards',
		description: 'Slider de cards, diseño realizado como un reto de frontendmentor.io'
	},
	{
		id: 9,
		link: 'https://jesusaviladev.github.io/proyectos/coming-soon',
		image: 'assets/images/9.png',
		thumbnail: 'assets/images/thumb9.jpg',
		title: 'Suscripción online',
		description: 'Formulario de Suscripción, diseño realizado como un reto de frontendmentor.io'
	},
	{
		id: 10,
		link: 'https://jesusaviladev.github.io/proyectos/contact',
		image: 'assets/images/10.png',
		thumbnail: 'assets/images/thumb10.jpg',
		title: 'Formulario de contacto',
		description: 'Formulario de contacto, diseño realizado como un reto de frontendmentor.io'
	},
	{
		id: 11,
		link: 'https://giphy-app-jesusaviladev.vercel.app/',
		image: 'assets/images/11.png',
		thumbnail: 'assets/images/thumb11.jpg',
		title: 'Buscador de gifs',
		description: 'Aplicación buscadora de Gifs, realizada en React.js con backend de giphy.com'
	},
	{
		id: 12,
		link: 'https://jesusaviladev.github.io/proyectos/landing-page',
		image: 'assets/images/12.png',
		thumbnail: 'assets/images/thumb12.jpg',
		title: 'Landing page',
		description: 'Diseño de landing page realizado como reto de frontendmentor.io'
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

//Scroll del menu
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

//funcion para cargar elementos de la galeria

const getGalleryItems = () => {

	const gallery = document.getElementById('gallery')
	const fragment = document.createDocumentFragment()

	portfolioData.forEach((element) => {
		const container = document.createElement('DIV')
		const thumbnail = document.createElement('IMG')
		container.classList.add('gallery__container')
		thumbnail.src = element.thumbnail
		thumbnail.classList.add('gallery__image')
		thumbnail.setAttribute('alt', 'gallery picture')
		thumbnail.dataset.id = element.id
		container.appendChild(thumbnail)
		fragment.appendChild(container)
	})

	gallery.appendChild(fragment)

}


//funcion para recuperar elementos del modal 
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

//eventos del click en la galería
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

//cargar elementos de galería
window.addEventListener('DOMContentLoaded', getGalleryItems)


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

//get date
const dateContainer = document.querySelector('.date')
const year = new Date().getFullYear()
dateContainer.textContent = `Copyright © ${year} - ${year + 1}`

//boton de scroll to top
const target = document.getElementById('target');
const scrollToTop = document.getElementById('scroll-to-top');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) scrollToTop.classList.add('btn-scroll--show');
		else scrollToTop.classList.remove('btn-scroll--show');
	})
}, {
	rootMargin: '1024px'
})

observer.observe(target)

scrollToTop.addEventListener('click', () => {
	window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
});

