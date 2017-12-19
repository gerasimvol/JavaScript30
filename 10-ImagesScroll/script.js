function throttle(func, ms = 125) {
  var isThrottled = false,
    savedArgs,
    savedThis;
  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}

const images = document.querySelectorAll('.slide-in')

function checkSlide(e) {
  images.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2
    const isHalfShown = slideInAt > image.offsetTop
    if(isHalfShown) {
      image.classList.add('active')
    }
  })
}

window.addEventListener('scroll', throttle(checkSlide))