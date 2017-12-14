const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', changeCheckbox)
})


function changeCheckbox(e) {
  if(!e.shiftKey) return
  let done = false
  
  const cbIndex = checkboxes.indexOf(e.target)

  for(let i = cbIndex+1; i <= checkboxes.length; i++) {
    if(!done) {
      try {
        if(checkboxes[i].checked) {
          markCheckboxes(i, cbIndex, checkboxes, true)
          done = true
          return
        } 
      } catch(e) {
        if(!done) {
          for(let j = cbIndex-1; j >= 0; j--) {
            if(checkboxes[j].checked) {
              markCheckboxes(j, cbIndex, checkboxes, false)
              done = true
              return
            }
          }
        }
      }
    } else {
      return
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

