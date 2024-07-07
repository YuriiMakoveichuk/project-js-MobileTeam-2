const sectionElCovers = document.querySelector('.js-covers-container');
const liElem = document.querySelectorAll('.covers-item');

function runningLine(item) {
  const sectionPosition = {
    top: window.scrollY + item.getBoundingClientRect().top,
    bottom: window.scrollY + item.getBoundingClientRect().bottom,
  };
  const windowPosition = {
    top: window.scrollY,
    bottom: window.scrollY + document.documentElement.clientHeight,
  };
  if (
    sectionPosition.bottom > windowPosition.top &&
    sectionPosition.top < windowPosition.bottom
  ) {
    for (const el of liElem) {
      el.classList.add('js-covers-item');
    }
  }
}

window.addEventListener('scroll', function () {
  runningLine(sectionElCovers);
});
