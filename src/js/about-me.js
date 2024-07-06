import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-me__list');


// const headers = document.querySelectorAll('.about-me__list__item__header');
// const contents = document.querySelectorAll('.about-me__list__item__content');
//
// headers.forEach(header => header.addEventListener('click', onHeaderClick));
//
// function onHeaderClick(e) {
//   const activeContent = document.getElementById(e.target.dataset.tab);
//
//   if (activeContent.classList.contains('active')) {
//     e.target.classList.remove('active');
//     activeContent.classList.remove('active');
//     activeContent.style.maxHeight = 0;
//   } else {
//     contents.forEach(content => {
//       content.classList.remove('active');
//       content.style.maxHeight = 0;
//     });
//
//     headers.forEach(header => header.classList.remove('active'));
//
//     e.target.classList.add('active');
//     activeContent.classList.add('active');
//
//     // Устанавливаем maxHeight элемента для плавного открытия
//     activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;
//   }
// }