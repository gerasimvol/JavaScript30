feather.replace() // iconpack update icons

const player = document.querySelector('.player')
const video = player.querySelector('video')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('.button_skip')
const volume = player.querySelector('.volume')
const volumeIconEl = player.querySelector('.volume-icon')
const speed = player.querySelector('.speed')

const playIcon = '<i data-feather="play-circle"></i>'
const pauseIcon = '<i data-feather="pause-circle"></i>'
const volumeIcon = {
  default: '<i data-feather="volume-1"></i>',
  muted: '<i data-feather="volume-x"></i>',
  max: '<i data-feather="volume-2"></i>'
}

function togglePlay() {
  video.paused 
    ? video.play()
    : video.pause()
}

function updateToggleButton() {
  video.paused 
    ? toggle.innerHTML = playIcon
    : toggle.innerHTML = pauseIcon

  feather.replace()
}

function skip() {
  const seconds = Number(this.dataset.skip)
  video.currentTime += seconds
}

function changeVolume() {
  video.volume = this.value

  if(video.volume == 0) volumeIconEl.innerHTML = volumeIcon.muted
  else if(video.volume >= 0.8) volumeIconEl.innerHTML = volumeIcon.max
  else volumeIconEl.innerHTML = volumeIcon.default

  feather.replace()
}

function changeSpeed() {
  video.playbackRate = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percent}%`
}

function rewind(e) {
  const progressWidth = progress.offsetWidth
  const clickedPlace = e.offsetX
  const whereToRewind = clickedPlace / progressWidth

  video.currentTime = video.duration * whereToRewind
  handleProgress()
}

video.addEventListener('timeupdate', handleProgress)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateToggleButton)
video.addEventListener('pause', updateToggleButton)

let mouseDown = false
progress.addEventListener('click', rewind)
progress.addEventListener('mousedown', () => { mouseDown = true })
progress.addEventListener('mouseup', () => { mouseDown = false })
progress.addEventListener('mouseout', () => { mouseDown = false })
progress.addEventListener('mousemove', (e) => {
  if (mouseDown) {
    rewind(e)
  }
})

toggle.addEventListener('click', togglePlay)
volume.addEventListener('input', changeVolume)
speed.addEventListener('input', changeSpeed)

skipButtons.forEach(button => {
  button.addEventListener('click', skip)
})

