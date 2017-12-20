const el = document.querySelector('.dynamicShadow')
const elY = el.offsetTop + (el.clientHeight/2)
const elX = el.offsetLeft + (el.clientWidth/2)

function mouseMove(e) {
  const x = (elX - e.clientX) / 13
  const y = (elY - e.clientY) / 13

  el.style.textShadow = `${x}px ${y}px 0 rgba(0,0,0,0.5)`
}

function handleOrientation(e) {
  const x = e.gamma * 1.2
  const y = e.beta * 1.2

  el.style.textShadow = `${x}px ${y}px 0 rgba(0,0,0,0.5)`
}

window.addEventListener('mousemove', mouseMove)
window.addEventListener('deviceorientation', handleOrientation);