var header = document.querySelector('.page-header__wrap');
var navToggle = document.querySelector('.page-header__toggle');
var nav = document.querySelector('.main-nav');

header.classList.remove('page-header__wrap--active');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('page-header__toggle--closed')) {
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
    header.classList.remove('page-header__wrap--active');
    nav.classList.remove('main-nav--js');
  }
  else {
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--opened');
    header.classList.add('page-header__wrap--active');
    nav.classList.add('main-nav--js');
  }
});
