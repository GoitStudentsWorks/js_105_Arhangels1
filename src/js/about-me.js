import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import {Navigation, Keyboard, Mousewheel} from 'swiper/modules';
import 'swiper/css';

document.addEventListener("DOMContentLoaded", () => {
  new Accordion('.about-me__list');
});


const swiper = new Swiper('.skills__swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.skills__swiper__next'
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.skills__swiper'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      loop:true,
    },
    767: {
      slidesPerView: 3,
      loop:true,
    },
    1439: {
      slidesPerView: 6,
      loop:true
    }
  },
  on:{
    slideChange:function () {
      const activeSlide = this.activeIndex

      this.slides.forEach((item,index) => {
        item.classList.remove('next-slide-bg');
      })

      this.slides.forEach((item,index) => {
        if(index === activeSlide){
          item.classList.add('next-slide-bg')
        }
      })
    }
  }
})
