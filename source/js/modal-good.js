var modalLink = document.querySelectorAll('.form-contest__btn');
var modalGood = document.querySelector('.modal__good');
var modalClose = document.querySelector('.modal__button');

for(var i = 0; i < modalLink.length; i++) {

  modalLink[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modalGood.classList.add('modal__show');
  });
}

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalGood.classList.remove('modal__show');
});

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode===27) {
    if(modalGood.classList.contains('modal__show')) {
    evt.preventDefault();
    modalGood.classList.remove('modal__show');
    }
  }
});
