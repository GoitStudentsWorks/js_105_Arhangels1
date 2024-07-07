import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-all-questions');

// document.addEventListener('DOMContentLoaded', function () {
//   const accordion = new Accordion('.faq-all-questions', {
//     duration: 300,
//     showMultiple: false,
//     openOnInit: [],
//   });

//   const faqItems = document.querySelectorAll('.faq-item');

//   faqItems.forEach(item => {
//     const question = item.querySelector('.faq-question');
//     const answer = item.querySelector('.faq-answer');

//     question.addEventListener('click', () => {
//       const isActive = item.classList.contains('active');
//       faqItems.forEach(i => {
//         i.classList.remove('active');
//         i.querySelector('.faq-answer').style.display = 'none';
//       });

//       if (!isActive) {
//         item.classList.add('active');
//         answer.style.display = 'block';
//       }
//     });
//   });
// });
