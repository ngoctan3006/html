// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Remove Menu
const navLink = document.querySelectorAll('.nav__link')
const navMenu = document.getElementById('nav-menu')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(el => el.addEventListener('click', linkAction))

// Scroll Section Action Link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(el => {
        const sectionHeight = el.offsetHeight
        const sectionTop = el.offsetTop - 50
        const sectionId = el.getAttribute('id')

        if((scrollY > sectionTop) && (scrollY <= sectionTop + sectionHeight)) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change color header
window.onscroll = () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}