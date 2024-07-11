const menuBtn = document.querySelector('.mobile-menu-btn'); //mobile-menu-btn
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu-close');
menuBtn.addEventListener('click', function(){
    menu.classList.add('is-active');
})
closeBtn.addEventListener('click', function(){
    menu.classList.remove('is-active');
})
menu.addEventListener('click', function(){
    menu.classList.remove('is-active');
})


