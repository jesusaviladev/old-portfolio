console.log('Mi portafolio')

const portfolioData = [
	{
		id: 1,
		link: 'https://genteconestilomexico.com/',
		image: 'assets/images/1.jpg',
		thumbnail: 'assets/images/1.jpg',
		title: 'Web de Gente con estilo Mexico',
		description: 'Pagina web de comercio electrónico, realizada con HTML, CSS y JavaScript'
	},
	{
		id: 2,
		link: 'https://www.activa941fm.com/',
		image: 'assets/images/2.jpg',
		thumbnail: 'assets/images/2.jpg',
		title: 'Reproductor de radio online',
		description: 'Reproductor de audio para radio online realizado en JavaScript'
	},
	{
		id: 3,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/3.jpg',
		thumbnail: 'assets/images/3.jpg',
		title: 'Menú de elementos JavaScript',
		description: 'Menú de comidas realizado en JavaScript, como práctica para freecodecamp.org'
	},
	{
		id: 4,
		link: 'https://jesusaviladev.github.io/DoomLikeEngine',
		image: 'assets/images/4.jpg',
		thumbnail: 'assets/images/4.jpg',
		title: 'Motor gráfico pseudo 3D',
		description: 'Motor gráfico para videjuego pseudo 3D realizado usando la técnica de Raycasting en JavaScript. Basado en el motor gráfico de Doom y Wolfenstein 3D'
	},
	{
		id: 5,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/5.jpg',
		thumbnail: 'assets/images/5.jpg',
		title: 'Diseño de un componente para perfil de usuario',
		description: 'Diseño de componente para perfil de usuario realizado en HTML y CSS como práctica para los retos de frontendmentor.io'
	},
	{
		id: 6,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/6.jpg',
		thumbnail: 'assets/images/6.jpg',
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
	},
]


//Menu pegajoso
const menu = document.querySelector('.header')
const menuHeight = menu.offsetTop;
window.addEventListener('scroll', ()=>{
	(pageYOffset > menuHeight) ? menu.classList.add('header__fixed') : menu.classList.remove('header__fixed')
})

// Menu movil
const menuToggle = document.querySelector('.header__toggle')
const menuBar = document.querySelector('.topbar')
menuToggle.addEventListener('click', (e)=>{
	menuBar.classList.toggle('topbar--show')
})

//eventos del click
const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', (e)=>{
	if(e.target.classList.contains('gallery__image')){
		const id = e.target.dataset.id
		const modal = document.querySelector('.modal')
		modal.classList.add('modal--show')
		document.body.style.overflowY = 'hidden'
		getModalElement(id)

		modal.addEventListener('click', (e)=>{
			if(e.target.classList.contains('modal')){
				modal.classList.remove('modal--show')
				document.body.style.overflowY = 'scroll'
			}
		})
	}
})

//formulario
const form = document.querySelector('.form')
form.addEventListener('submit', (e)=>{
	console.log(e)
	e.preventDefault();
})
//funcion para elementos del modal 
function getModalElement(id){
	const modalElement = portfolioData.filter((elements)=> elements.id == id)
	const fragment = document.createDocumentFragment()
	const template = document.getElementById('template').content
	const container = document.querySelector('.modal__container')

	while(container.firstElementChild){
		container.removeChild(container.lastElementChild)
	}

	template.querySelector('.modal__title').textContent = modalElement[0].title
	template.querySelector('.modal__image').src = modalElement[0].image
	template.querySelector('.modal__description').textContent = modalElement[0].description
	template.querySelector('.modal__link').href = modalElement[0].link

	let newTemplate = template.cloneNode(true)
	fragment.appendChild(newTemplate)

	container.appendChild(fragment)

}

//scroll
const links = document.querySelectorAll('')