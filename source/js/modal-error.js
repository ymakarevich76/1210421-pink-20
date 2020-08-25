var popupLink = document.querySelectorAll('.form-contest__btn');
var modalError = document.querySelector('.modal-error');
var popupClose = document.querySelector('.modal__btn');

for (var i = 0; i < popupLink.length; i++) {

popupLink[i].addEventListener('click', function(evt) {
evt.preventDefault();
modalError.classList.add('modal-show');
});
}

popupClose.addEventListener('click', function(evt) {
evt.preventDefault();
modalError.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
if(evt.keyCode===27) {
if(modalError.classList.contains('modal-show')) {
evt.preventDefault();
modalError.classList.remove('modal-show');
}
}
});
