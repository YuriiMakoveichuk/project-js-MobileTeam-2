import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 1440) {
    new Swiper('.swiper-about', {
      slidesPerView: 2,
      spaceBetween: 0,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 1,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          loop: true,
          loopedSlides: 1,
          slidesPerView: 2,
          spaceBetween: 0,
          slideToClickedSlide: true,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
          slideToClickedSlide: true,
          loop: true,
          loopedSlides: 1,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next.btn-next-skill',
      },
    });
  }
});

const skillList = document.querySelector('.list-my-skills');
const skills = skillList.children;
const buttonNext = document.querySelector('.btn-next-skill');
let currentActive = skills[0];

function updateActive() {
  currentActive.classList.remove('active');

  let nextActive = currentActive.nextElementSibling;
  if (!nextActive) {
    nextActive = skillList.firstElementChild;
  }

  currentActive = nextActive;
  currentActive.classList.add('active');
}

buttonNext.addEventListener('click', () => {
  updateActive();
});
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    updateActive();
  }
});

const test = new Accordion('.accordion-container', {
  duration: 500,
  showMultiple: true,
  onOpen: function (currentEl) {
    const btnShowContent = currentEl.querySelector(
      '.icon-btn-show-content-about'
    );
    const btnHideContent = currentEl.querySelector(
      '.icon-btn-hide-content-about'
    );
    btnHideContent.classList.remove('visually-hidden');
    btnShowContent.classList.add('visually-hidden');
  },
  onClose: function (currentEl) {
    const btnShowContent = currentEl.querySelector(
      '.icon-btn-show-content-about'
    );
    const btnHideContent = currentEl.querySelector(
      '.icon-btn-hide-content-about'
    );
    btnHideContent.classList.add('visually-hidden');
    btnShowContent.classList.remove('visually-hidden');
  },
});
test.open(0);
