const headerMenuBtnElem = document.querySelector('.header-menu-btn');
const headerMenuListElem = document.querySelector('.header-list-navigation');

headerMenuBtnElem.addEventListener('click', function(event) {
    if (headerMenuListElem.classList.contains('visually-hidden')) {
        headerMenuListElem.classList.remove('visually-hidden');
        setTimeout(() => {
            headerMenuListElem.classList.add('visible');
        }, 10); 
    } else {
        headerMenuListElem.classList.remove('visible');
        headerMenuListElem.addEventListener('transitionend', function handleTransitionEnd() {
            headerMenuListElem.classList.add('visually-hidden');
            headerMenuListElem.removeEventListener('transitionend', handleTransitionEnd);
        });
    }
});

headerMenuListElem.addEventListener('click', function() {
    headerMenuListElem.classList.remove('visible');
    headerMenuListElem.addEventListener('transitionend', function handleTransitionEnd() {
        headerMenuListElem.classList.add('visually-hidden');
        headerMenuListElem.removeEventListener('transitionend', handleTransitionEnd);
    });
});

