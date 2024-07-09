// document.addEventListener('DOMContentLoaded', function () {
//     const faqitems = document.querySelectorAll('.faq-item');

//     faqitems.forEach(item => {
//         const header = item.querySelector('.faq-title');
        
//         header.addEventListener('click', function () {
//             const openItem = document.querySelector('.faq-item.active');
            
//             toggleItem(item);

//             if (openItem && openItem !== item) {
//                 toggleItem(openItem);
//             }
//         });
//     });

//     const toggleItem = item => {
//         const body = item.querySelector('.faq-body');
        
//         if (item.classList.contains('active')) {
//             body.style.display = 'none';
//             item.classList.remove('active');
//         } else {
//             body.style.display = 'block';
//             item.classList.add('active');
//         }
//     };
// });

import Accordion from 'accordion-js';
import '../css/faq/accardion.css';
import Swiper from 'swiper';
import 'swiper/css';
 

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 1440){
      new Swiper('.swiper-faq',{
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
            nextEl: '.swiper-button-next',
        },
    });
    }
});

  const faqlist = document.querySelector('.faq-list');
  const faq = faqlist.children;
  const buttonNext = document.querySelector('.btn-next-skill');
  let currentActive = faq[0];  

function updateActive() {
    currentActive.classList.remove('active');
  
    let nextActive = currentActive.nextElementSibling;
    if (!nextActive) {
      nextActive = faqlist.firstElementChild;
    }

    currentActive = nextActive;
    currentActive.classList.add('active');
  }

  buttonNext.addEventListener('click', () => {
    updateActive();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      updateActive();
    }
  });



const accFaqEl = new Accordion('.faq-list', {
    duration: 500,
    showMultiple: true,
    onOpen: function (currentEl) {
        const btnShowContent = currentEl.querySelector('.icon-btn-show-content');
        const btnHideContent = currentEl.querySelector('.icon-btn-hide-content');
        btnHideContent.classList.remove('visually-hidden');
        btnShowContent.classList.add('visually-hidden');
    },
    onClose: function (currentEl) {
        const btnShowContent = currentEl.querySelector('.icon-btn-show-content');
        const btnHideContent = currentEl.querySelector('.icon-btn-hide-content');
        btnHideContent.classList.add('visually-hidden');
        btnShowContent.classList.remove('visually-hidden');
    }
});

accFaqEl.open(0);
