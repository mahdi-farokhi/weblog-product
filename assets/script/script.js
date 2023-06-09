/*================= #SHOW MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

 /*======= #MENU SHOW ========*/
 if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
 }

 /*============== #MENU HIDDEN ==========*/
 /* Validate if constant exists */
 if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
 }


 /*============ #REMOVE MENU MOBILE =======*/

 const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== # CHANGE BACKGROUND HEADER ====================*/

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
/* LInk active featured */
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured (){
  linkFeatured.forEach(l=> l.classList.remove('.active-featured'))
  this.classList.add('.active-featured');
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))


/*=============== #SHOW SCROLL UP ===================*/

const scrollUp = () =>{
	let scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

       

       

      /*======================  SCROLL REVEAL ================*/

   const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
   })

   sr.reveal(`.home__title, .popular__container, .featured__container`);
   sr.reveal(`.home__subtitle`, {delay: 500});
   sr.reveal(`.home__elec`, {delay: 500});
   sr.reveal(`.header-car`, {delay: 800});
   sr.reveal(`.home__car-data`, {delay: 900, interval: 90, origin: 'bottom'});
   sr.reveal(`.about__group`, { origin: 'left'});
   sr.reveal(`.about__data`, { origin: 'right'});
   sr.reveal(`.footer__container`, { interval: 90, origin: 'left'});
   sr.reveal(`.popular section`, { origin: 'right'});
   
   let swiperPopular = new Swiper(".popular__container", {
      loop: true,
      spaceBetween: 24,
      slidesPerView : 'auto',
      grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
       
      },
      1024: {
      
        spaceBetween: 48,
      },
    },
  });


  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);


 