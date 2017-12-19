const secretCode = document.getElementById('secretCode').title
let keyPressed = []

document.addEventListener('keyup', (e) => {
  if (keyPressed.length === secretCode.length) {
    keyPressed.shift()
  }
  keyPressed.push(e.key)
  if (keyPressed.join('') === secretCode) {
    cornify_add()
  }
})