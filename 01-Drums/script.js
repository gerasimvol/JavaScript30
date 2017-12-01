  function loaded() {
    window.addEventListener("keydown", keyDown, false)
    window.addEventListener("keyup", keyUp, false)
  }

  let boom = new Audio("sounds/boom.wav"),
      clap = new Audio("sounds/clap.wav"),
      hihat = new Audio("sounds/hihat.wav"),
      kick = new Audio("sounds/kick.wav"),
      openhat = new Audio("sounds/openhat.wav"),
      ride = new Audio("sounds/ride.wav"),
      snare = new Audio("sounds/snare.wav"),
      tink = new Audio("sounds/tink.wav"),
      tom = new Audio("sounds/tom.wav")

      boom.addEventListener('canplaythrough', loaded, false)
      clap.addEventListener('canplaythrough', loaded, false)
      hihat.addEventListener('canplaythrough', loaded, false)
      kick.addEventListener('canplaythrough', loaded, false)
      openhat.addEventListener('canplaythrough', loaded, false)
      ride.addEventListener('canplaythrough', loaded, false)
      snare.addEventListener('canplaythrough', loaded, false)
      tink.addEventListener('canplaythrough', loaded, false)
      tom.addEventListener('canplaythrough', loaded, false)
  
  const sounds = {
    65: boom,
    83: clap,
    68: hihat,
    70: kick,
    71: openhat,
    72: ride,
    74: snare,
    75: tink,
    76: tom
  }

  
  
  function keyDown(e) {
    let keyCode = e.keyCode
    let key = document.querySelector(`.key[data-key="${keyCode}"]`)
    let audio = sounds[keyCode]
    if(!audio || !key) return
    
    key.classList.add("pressed")
    audio.currentTime = 0
    audio.play()
    if(keyCode == 65) boom.play()
  }
  
  function keyUp(e) {
    let keyCode = e.keyCode
    let key = document.querySelector(`.key[data-key="${keyCode}"]`)
    if(!key) return
  
    key.classList.remove("pressed")
  }