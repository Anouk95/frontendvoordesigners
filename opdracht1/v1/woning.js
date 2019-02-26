function hide() {
  var firstOne = document.querySelector('.detail__item');
  firstOne.classList.toggle('detail__item--hidden');
}

var button = document.getElementById('hider');

button.addEventListener('click', hide)

function hide1() {
  var secondOne = document.querySelector('.detail__item1');
  secondOne.classList.toggle('detail__item1--hidden');
}

var button = document.getElementById('hider1');

button.addEventListener('click', hide1)
