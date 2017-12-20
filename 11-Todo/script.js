const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.items');
const items = [];

function addItem(e) {
  e.preventDefault()
  const item = {
    text: this.item.value,
    done: false
  }
  items.push(item)
  this.reset() // clean form
}

addItems.addEventListener('submit', addItem)