const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', changeCheckbox)
})


function changeCheckbox(e) {
  if(!e.shiftKey) return
  
  const cbIndex = checkboxes.indexOf(e.target)

  for(let i = cbIndex+1; i < checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      markCheckboxes(i-1, cbIndex, checkboxes, true)
    } else {
      for(let j = cbIndex-1; j >= 0; j--) {
        if(checkboxes[j].checked) {
          markCheckboxes(j+1, cbIndex, checkboxes, false)
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

