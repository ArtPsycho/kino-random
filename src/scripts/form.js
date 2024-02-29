// TODO: прописать формы и связать их в один валуе

const startButton = document.getElementById('start-button');
const formStart = document.getElementById('form-start')
const formResult = document.getElementById('form-result');

startButton.addEventListener('click', () => {
  formStart.classList.remove('modal__opened');
  formResult.classList.add('modal__opened');
})

const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', () => {
  formResult.classList.remove('modal__opened');
  formStart.classList.add('modal__opened');
})