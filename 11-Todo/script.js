const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.items')
const items = JSON.parse(localStorage.getItem('items')) || []

function updateLS() {
  localStorage.setItem('items', JSON.stringify(items))
}

function checkItem(itemId) {
  items[itemId].done = !items[itemId].done
  updateLS()
}

function removeItem(itemId) {
  items.splice(itemId, 1)
  updateLS()
  renderList(items, itemsList)
}

function addItem(e) {
  e.preventDefault()
  const item = {
    text: this.item.value,
    done: false
  }
  items.push(item)
  updateLS()
  renderList(JSON.parse(localStorage.getItem('items')), itemsList)
  this.reset() // clean form
}

function renderList(items = [], itemsList) {
  if (items.length === 0) {
    itemsList.innerHTML = 'Nothing to do :)'
  } else {
    itemsList.innerHTML = items.map((item, i) => {
      return `
        <li>
          <input type="checkbox"
                 id="item-${i}"
                 ${item.done ? 'checked' : ''}
                 onclick="checkItem(${i})"
          />
          <label for="item-${i}">${item.text}</label>
          <div onclick="removeItem(${i})">
            <i data-feather="trash-2"
               class="delete-icon">
            </i>
          </div>
        </li>
      `
    }).join('')
  
    feather.replace()
  }
}

addItems.addEventListener('submit', addItem)

renderList(items, itemsList)