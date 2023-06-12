const burgerBtn = document.querySelector('.header .burger')
const closeBtn = document.querySelector('.close')

function toggleBurgerMenu() {
    let adaptiveHeader = document.querySelector('.header-adaptive')
    adaptiveHeader.classList.toggle('toggle')
    document.body.classList.toggle('noscroll')
    burgerBtn.classList.toggle('toggle')
    closeBtn.classList.toggle('toggle')
}

burgerBtn.addEventListener('click', toggleBurgerMenu)
closeBtn.addEventListener('click', toggleBurgerMenu)
