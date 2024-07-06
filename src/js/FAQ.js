document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');

      const answer = item.querySelector('.faq-answer');
      if (item.classList.contains('active')) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
});
