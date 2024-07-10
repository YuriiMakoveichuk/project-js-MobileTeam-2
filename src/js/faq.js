import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export const accord = new Accordion('.container-first', {
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
  },
});
