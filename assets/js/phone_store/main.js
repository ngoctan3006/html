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

// Popup
const popup = document.querySelector('.popup')
const closePopup = document.querySelector('.popup__close')

if(popup) {
    closePopup.addEventListener('click', () => {
        popup.classList.add('hide__popup')
    })

    window.addEventListener('load', () => {
        setTimeout(() => {
            popup.classList.remove('hide__popup')
        }, 500)
    })
}

// AOS
AOS.init()
