const nav = document.querySelector('nav')
const topOfNav = nav.offsetTop

function fixNav() {
  if (window.scrollY >= topOfNav) {
    nav.classList.add('nav_fixed')
    document.body.style.paddingTop = nav.offsetHeight + 'px'
  } else {
    nav.classList.remove('nav_fixed')
    document.body.style.paddingTop = 0
  }
}

window.addEventListener('scroll', fixNav)