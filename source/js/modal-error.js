var popupLink = document.querySelectorAll('.form-contest__btn');
var modalError = document.querySelector('.modal__error');
var popupClose = document.querySelector('.modal__btn');

for (var i = 0; i < popupLink.length; i++) {

  popupLink[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modalError.classList.add('modal__show');
  });
}

popupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalError.classList.remove('modal__show');
});

window.addEventListener('keydown', function(evt) {
  if(evt.keyCode===27) {
    if(modalError.classList.contains('modal__show')) {
    evt.preventDefault();
    modalError.classList.remove('modal__show');
    }
  }
});
