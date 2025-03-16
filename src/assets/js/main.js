import { gsap } from 'gsap';
// import 'sakura-js/dist/sakura.min.js';
import Sakura from './sakura';

 

/*======================= MENU =======================*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close'),
      navLinks = document.querySelectorAll('#nav-menu a')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Close menu when clicking outside */
document.addEventListener('click', (event) => {
    // Проверяем, содержится ли место клика внутри меню или на кнопке открытия
    const isClickInsideMenu = navMenu.contains(event.target)
    const isClickOnToggle = navToggle.contains(event.target)
    
    // Если клик был вне меню и не на кнопке открытия, и меню открыто - закрываем его
    if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu')
    }
})

/* Close menu when clicking on a menu link */
if(navLinks.length > 0){
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    })
}

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.querySelector('#header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__img-1', {
    duration: 5,
    opacity: 0,
    x: 400,
})
gsap.from('.home__img-6', {
    opacity: 0,
    duration: 1.5,
    y: 200,
    delay: 0.1,
    ease: 'back.out(1.5)',
})
gsap.from('.home__img-3', {
    opacity: 0,
    duration: 1.5,
    y: 400,
    delay: 0.1,
    ease: 'back.out(1.5)',
})
gsap.from('.home__img-5', {
    opacity: 0,
    duration: 1.5,
    y: 400,
    delay: 0.5,
    ease: 'back.out(1.5)',
})
gsap.from('.home__img-2', {
    opacity: 0,
    duration: 1.5,
    y: 400,
    delay: 0.8,
    ease: 'back.out(1.5)',
})
gsap.from('.home__img-4', {
    opacity: 0,
    duration: 1.5,
    y: 200,
    delay: 1.8,
    ease: 'back.out(1.5)',
})
gsap.from('.home__data', {
    opacity: 0,
    duration: 1.5,
    y: -100,
    delay: 2.5,
    ease: 'back.out(1.5)',
})
gsap.from('.home__lantern-1', {
    opacity: 0,
    duration: 1.5,
    x: 70,
    delay: 3,
    ease: 'back.out(1.5)',
})
gsap.from('.home__lantern-2', {
    opacity: 0,
    duration: 1.5,
    x: -70,
    delay: 3.5,
    ease: 'back.out(1.5)',
})

/*=============== SAKURA ANIMATION ===============*/
const sakura = new Sakura('.sakura-petals');
