function isTouchDevice(){
  return typeof window.ontouchstart !== 'undefined';
}

const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

let isDrawing = false
let isGrowingWidth = true
let startX = 0
let startY = 0
let lineColor = 0

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 10

function draw(e) {
  if (!isDrawing) return

  // set color
  ctx.strokeStyle = `hsl(${lineColor}, 100%, 50%)`
  // hey canvas, we start dwar
  ctx.beginPath()
  // start from
  ctx.moveTo(startX, startY)
  // move to
  !isTouchDevice() 
    ? ctx.lineTo(e.offsetX, e.offsetY) 
    : ctx.lineTo(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
  // connect
  ctx.stroke()

  // update new X, Y
  !isTouchDevice()
    ? [startX, startY] = [e.offsetX, e.offsetY]
    : [startX, startY] = [e.targetTouches[0].clientX, e.targetTouches[0].clientY]

  // change color
  lineColor++
  if (lineColor >= 360) {
    lineColor = 0
  }

  // change width
  if(ctx.lineWidth >= 20 || ctx.lineWidth < 10) {
    isGrowingWidth = !isGrowingWidth
  }

  // change grow width or reduce
  isGrowingWidth ? ctx.lineWidth++ : ctx.lineWidth--
}

// mouse
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => { 
  isDrawing = true 
  startX = e.offsetX
  startY = e.offsetY
})
canvas.addEventListener('mouseup', () => { isDrawing = false })
canvas.addEventListener('mouseout', () => { isDrawing = false })

// touch
canvas.addEventListener('touchmove', draw)
canvas.addEventListener('touchstart', (e) => { 
  isDrawing = true 
  startX = e.targetTouches[0].clientX
  startY = e.targetTouches[0].clientY
})
canvas.addEventListener('touchend', () => { isDrawing = false })