import Swiper from 'swiper';
import 'swiper/css';

const reviewsList = document.querySelector('.reviews-list');
const btnGoLeft = document.querySelector('.btn-go-left');
const btnGoRight = document.querySelector('.btn-go-right');
let swiper;

async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}

function reviewsMarkup(obj) {
  return `<li class="swiper-slide list-item">
    <img class="person-avatar" src="${obj.avatar_url}" alt="Avatar">
    <p class="person-name">${obj.author}</p>
    <p class="person-review">${obj.review}</p>
  </li>`;
}

async function initSwiper() {
  try {
    const reviews = await getReviews();
    if (reviews.length === 0) {
      reviewsList.innerHTML =
        '<li class="swiper-slide list-item">Not found</li>';
      btnGoLeft.classList.add('disabled');
      btnGoRight.classList.add('disabled');
      return;
    }

    reviewsList.innerHTML = reviews.map(reviewsMarkup).join('');

    swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.btn-go-right',
        prevEl: '.btn-go-left',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });

    btnGoLeft.addEventListener('click', () => {
      if (swiper) {
        swiper.slidePrev();
        updateButtonState();
      }
    });

    btnGoRight.addEventListener('click', () => {
      if (swiper) {
        swiper.slideNext();
        updateButtonState();
      }
    });

    updateButtonState();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    reviewsList.innerHTML = '<li class="swiper-slide list-item">Not found</li>';
    btnGoLeft.classList.add('disabled');
    btnGoRight.classList.add('disabled');
  }
}

function updateButtonState() {
  if (swiper) {
    if (swiper.isBeginning) {
      btnGoLeft.classList.add('disabled');
    } else {
      btnGoLeft.classList.remove('disabled');
    }

    if (swiper.isEnd) {
      btnGoRight.classList.add('disabled');
    } else {
      btnGoRight.classList.remove('disabled');
    }
  }
}

initSwiper();

//
