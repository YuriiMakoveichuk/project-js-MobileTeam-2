import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.swiper',{
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next.projects-btn',
        prevEl: '.swiper-button-prev.projects-btn',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});
