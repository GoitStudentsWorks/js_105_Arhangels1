import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
// import 'swiper/css/navigation';

const swiperOptions = {
  //   loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews-next-btn', //'.swiper-button-next',
    prevEl: '.reviews-prev-btn', //'.swiper-button-prev',
  },
  // autoHeight: true,
  direction: 'horizontal',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
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

const refs = {
  slideWrapper: document.querySelector('.reviews-swiper-wrapper'),
  prevBtn: document.querySelector('.reviews-prev-btn'),
  nextBtn: document.querySelector('.reviews-next-btn'),
};

refs.prevBtn.classList.add('reviews-prev-btn-off');
let reviewsArrLength;
let reviewsCounter = 1;

async function getReviews() {
  const res = await axios.get('https://portfolio-js.b.goit.study/api/reviews', {
    headers: {
      accept: 'application/json',
    },
  });
  console.log(res.data);
  reviewsArrLength = res.data.length;
  console.log(reviewsArrLength);
  refs.slideWrapper.insertAdjacentHTML('afterbegin', slidesTemplate(res.data));
}

getReviews();

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

refs.nextBtn.addEventListener('click', () => {
  reviewsCounter++;
  refs.prevBtn.classList.remove('reviews-prev-btn-off');
  console.log(reviewsCounter, reviewsArrLength);
  if (reviewsCounter === reviewsArrLength) {
    refs.nextBtn.classList.add('reviews-prev-btn-off');

    console.log('!!!');
  }
});
