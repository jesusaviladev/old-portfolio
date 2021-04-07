console.log('Mi portafolio')

const portfolioData = [
	{
		id: 1,
		link: 'https://genteconestilomexico.com/',
		image: 'assets/images/1.jpg',
		thumbnail: 'assets/images/1.jpg',
		title: 'Gente con estilo Mexico',
		description: 'Pagina web de comercio electrónico, realizada es HTML, CSS y JavaScript'
	},
	{
		id: 2,
		link: 'https://jesusaviladev.github.io/',
		image: 'assets/images/2.jpg',
		thumbnail: 'assets/images/2.jpg',
		title: 'Proyecto 2',
		description: 'Pagina web 2'
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
//funcion 

//formulario
const form = document.querySelector('.form')
form.addEventListener('submit', (e)=>{
	console.log(e)
	e.preventDefault();
})

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