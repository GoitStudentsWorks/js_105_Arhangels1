const headerMenuBtnElem = document.querySelector('.header-menu-btn');
const headerMenuListElem = document.querySelector('.header-list-navigation');

headerMenuBtnElem.addEventListener('click', function(event) {
    headerMenuListElem.classList.toggle('visually-hidden');
});

headerMenuListElem.addEventListener('click', function() {
    headerMenuListElem.classList.add('visually-hidden');
    headerMenuListElem.style.opacity = '';
});
