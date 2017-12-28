const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

let selectedLink = null

function highlightLink() {
  selectedLink = this
  const link = this.getBoundingClientRect()
  highlight.style.width = `${link.width}px`
  highlight.style.height = `${link.height}px`
  highlight.style.transform = `translate(${link.left + window.scrollX}px, ${link.top + window.scrollY}px)`

  triggers.forEach((link) => {
    link.style.color = "#ffffff"
  })
  selectedLink.style.color = "#000000"
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))