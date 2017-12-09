const panels = document.querySelectorAll('.panel')

function openClose() {
  panels.forEach((panel) => {
    if (panel != this)
    panel.classList.remove('open')
  })
  this.classList.toggle('open')
}

panels.forEach(function(panel) {
  panel.addEventListener('click', openClose)
})