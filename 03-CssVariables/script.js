const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const suf = this.dataset.sizing || ''
  console.log(this)
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suf)
}

inputs.forEach(input => {
  input.addEventListener('input', handleUpdate)
})