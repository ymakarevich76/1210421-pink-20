var modalLink = document.querySelector('.form-contest__btn');
var modalGood = document.querySelector('.modal-good');
var modalClose = document.querySelector('.modal__btn');

for(var i = 0; i < modalLink.length; i++) {
modalLink[i].addEventListener('click', function(evt) {
evt.preventDefault();
modalGood.classList.add('modal-show');
});
}

modalClose.addEventListener('click', function(evt) {
evt.preventDefault();
modalGood.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
if(evt.keyCode===27) {
if(modalGood.classList.contains('.modal-show')) {
evt.preventDefault();
modalGood.classList.remove('.modal-show');
}
}
});
