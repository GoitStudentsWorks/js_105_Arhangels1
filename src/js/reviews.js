import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

const swiperOptions = {
  //   loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1439: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
};
const swiper = new Swiper('.swiper', swiperOptions);

const slideWrapper = document.querySelector('.reviews-swiper-wrapper');

async function getReviews() {
  const res = await axios.get('https://portfolio-js.b.goit.study/api/reviews', {
    headers: {
      accept: 'application/json',
    },
  });
  console.log(res.data);
  slideWrapper.insertAdjacentHTML('afterbegin', slidesTemplate(res.data));
}

function slideTemplate(slide) {
  return `<div class="swiper-slide reviews-swiper-slide">
          <img
            class="reviews-img"
            src="${slide.avatar_url}"
            alt="Natalia"
          />
          <div class="reviews-desc">
            <p class="reviews-name">${slide.author}</p>
            <p class="reviews-text">${slide.review}</p>
          </div>
        </div>`;
}

function slidesTemplate(slades) {
  return slades.map(slideTemplate).join('');
}

getReviews();
