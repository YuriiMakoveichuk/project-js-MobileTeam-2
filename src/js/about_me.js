import Accordion from 'accordion-js';
import '../css/about_me/accardion.css';

// const accordionsAboutMeEl = Array.from(document.querySelectorAll('.accordion-container'));



const accAboutMeEl = new Accordion('.accordion-container-about-me', {
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

accAboutMeEl.open(0);