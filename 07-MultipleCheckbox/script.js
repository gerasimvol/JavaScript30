const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', changeCheckbox)
})


function changeCheckbox(e) {
  // if not with shift we dont care
  if(!e.shiftKey) return
  // store if we finished matching between shift pressed and first found
  let done = false
  // shift pressed checkbox
  const cbIndex = checkboxes.indexOf(e.target)

  // try to find from up to down
  for(let i = cbIndex+1; i <= checkboxes.length; i++) {
    if(!done) {
      try {
        // found first checked!
        if(checkboxes[i].checked) {
          // mark all between
          markCheckboxes(i, cbIndex, checkboxes, true)
          // we done matching
          done = true
          return
        } 
      } catch(e) {
        if(!done) {
          // try to find from down to up
          for(let j = cbIndex-1; j >= 0; j--) {
            // found first checked!
            if(checkboxes[j].checked) {
              // mark all between
              markCheckboxes(j, cbIndex, checkboxes, false)
              // we done matching
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

