import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.projects-swiper', {

    modules: [Navigation, Keyboard],
    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});