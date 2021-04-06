console.log('Mi portafolio')
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
		const modal = document.querySelector('.modal')
		modal.classList.add('modal--show')
		document.body.style.overflowY = 'hidden'

		modal.addEventListener('click', (e)=>{
			if(e.target.classList.contains('modal')){
				modal.classList.remove('modal--show')
				document.body.style.overflowY = 'scroll'
			}
		})
	}
})