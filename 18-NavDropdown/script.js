const triggers = document.querySelectorAll('.nav__item')
const dropdownBg = document.querySelector('.dropdownBackground')
const nav = document.querySelector('nav')

function handleEnter() {
  this.classList.add('trigger-enter')
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active')
    }
  }, 150)
  dropdownBg.classList.add('open')


  const dropdownCoords = this.querySelector('.dropdown').getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()
  const dropdownBgCoords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }

  dropdownBg.style.width = dropdownBgCoords.width + 'px'
  dropdownBg.style.height = dropdownBgCoords.height + 'px'
  dropdownBg.style.transform = `translate(${dropdownBgCoords.left}px, ${dropdownBgCoords.top}px)`
  
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  dropdownBg.classList.remove('open')
}

triggers.forEach(triggers => triggers.addEventListener('mouseenter', handleEnter))
triggers.forEach(triggers => triggers.addEventListener('mouseleave', handleLeave))