var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var intro = document.querySelector('.intro');

navMain.classList.remove('main-nav--nojs');
intro.classList.remove('intro--bottom-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    intro.classList.add('intro--bottom-js');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    intro.classList.remove('intro--bottom-js');
  }
});
