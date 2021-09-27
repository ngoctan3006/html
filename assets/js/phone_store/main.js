// Navigation
const navOpen = document.querySelector('.nav__hamburger')
const navClose = document.querySelector('.close__toggle')
const menu = document.querySelector('.nav__menu')

navOpen.addEventListener('click', () => {
    menu.classList.add('open')
    document.body.classList.add('active')
})

navClose.addEventListener('click', (e) => {
    menu.classList.remove('open')
    document.body.classList.remove('active')
    e.preventDefault()
})

// AOS
AOS.init()