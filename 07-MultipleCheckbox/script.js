const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', changeCheckbox)
})

function changeCheckbox(e) {
  if(!e.shiftKey) return
  
  const cbIndex = checkboxes.indexOf(e.target)

  for(let i = cbIndex; i <= checkboxes.length; i++) {
    try {
      if(checkboxes[i].checked) {
        markCheckboxes(i, cbIndex, checkboxes, true)
      } 
    } catch(e) {
      for(let j = cbIndex; j >= 0; j--) {
        if(checkboxes[j].checked) {
          markCheckboxes(j, cbIndex, checkboxes, false)
        }
      }
    }
  }
}

function markCheckboxes(from, to, checkboxes, grow) {
  if(grow) {
    for(let j = from; j > to; j--) {
      checkboxes[j].checked = true
    }
  } else {
    for(let j = from; j < to; j++) {
      checkboxes[j].checked = true
    }
  }
}

