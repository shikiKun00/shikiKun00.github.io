const navbar = document.querySelector('navbar')
const openNav = navbar.querySelector('.opn-nav')
const navLinks = navbar.querySelector('.nav-link')

const container = document.querySelector('.container')
window.addEventListener('load', () => {
  container.style.paddingTop = navbar.clientHeight + 30 + "px"
})


openNav.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  navLinks.style.top = navbar.clientHeight + 'px'
})

window.addEventListener('scroll', () => {
  navbar.classList.add('active')
})