let app = document.body

app.addEventListener("keydown", keyDown, false)
app.addEventListener("keyup", keyUp, false)

function keyDown(e) {
  let keyCode = e.keyCode
  let key = document.querySelector(`.key[data-key="${keyCode}"]`)
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  if(!audio || !key) return
  
  key.classList.add("pressed")
  audio.currentTime = 0
  audio.play()
}

function keyUp(e) {
  let keyCode = e.keyCode
  let key = document.querySelector(`.key[data-key="${keyCode}"]`)
  if(!key) return

  key.classList.remove("pressed")
}