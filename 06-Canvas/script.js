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

  ctx.strokeStyle = `hsl(${lineColor}, 100%, 50%)`
  ctx.beginPath()
  // start from
  ctx.moveTo(startX, startY)
  // move to
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()

  startX = e.offsetX
  startY = e.offsetY

  lineColor++
  if (lineColor >= 360) {
    lineColor = 0
  }

  if(ctx.lineWidth >= 20 || ctx.lineWidth < 10) {
    isGrowingWidth = !isGrowingWidth
  }

  isGrowingWidth ? ctx.lineWidth++ : ctx.lineWidth--
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => { 
  isDrawing = true 
  startX = e.offsetX
  startY = e.offsetY
})
canvas.addEventListener('mouseup', () => { isDrawing = false })
canvas.addEventListener('mouseout', () => { isDrawing = false })