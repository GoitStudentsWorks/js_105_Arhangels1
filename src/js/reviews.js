import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';

const swiperOptions = {
  //   loop: true,
  modules: [Navigation, Keyboard],
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
const swiperReviews = new Swiper('.swiper-reviews', swiperOptions);

swiperReviews.on('reachBeginning', function () {
  refs.prevBtn.classList.add('reviews-prev-btn-off');
  refs.nextBtn.classList.remove('reviews-prev-btn-off');
});

swiperReviews.on('reachEnd', function () {
  refs.nextBtn.classList.add('reviews-prev-btn-off');
  refs.prevBtn.classList.remove('reviews-prev-btn-off');
});

const refs = {
  slideWrapper: document.querySelector('.reviews-swiper-wrapper'),
  prevBtn: document.querySelector('.reviews-prev-btn'),
  nextBtn: document.querySelector('.reviews-next-btn'),
};

refs.prevBtn.classList.add('reviews-prev-btn-off');

async function getReviews() {
  const res = await axios.get('https://portfolio-js.b.goit.study/api/reviews', {
    headers: {
      accept: 'application/json',
    },
  });

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
  refs.prevBtn.classList.remove('reviews-prev-btn-off');
});

refs.prevBtn.addEventListener('click', () => {
  refs.nextBtn.classList.remove('reviews-prev-btn-off');
});

document.addEventListener('keydown', e => {
  if (e.code === 'ArrowRight') {
    refs.prevBtn.classList.remove('reviews-prev-btn-off');
  }
  if (e.code === 'ArrowLeft') {
    refs.nextBtn.classList.remove('reviews-prev-btn-off');
  }
});
