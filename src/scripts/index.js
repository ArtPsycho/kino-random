import '../pages/index.css';
import { getSearchData } from './api';


// Стартовая страница
const startButton = document.getElementById('start-button');
const formStart = document.getElementById('form-start')
const formResult = document.getElementById('form-result');
const formGenre = document.getElementById('form-genre');
const formRating = document.getElementById('form-rating');
const formMembers = document.getElementById('form-members');


// Пустой state
function newState() {
  ratingState = '0';
  genreState = null;
  console.log('created');
  console.log(ratingState, genreState)
}

// Кнопка start на стартовой странице
// Переключение на другую страницу
startButton.addEventListener('click', () => {
  formStart.classList.remove('modal__opened');
  // formMembers.classList.add('modal__opened');
  formGenre.classList.add('modal__opened');
  newState();
})

// // Страница выбора количества участников
// const membersButton = document.getElementById('members-button');
// const membersSelect = document.getElementById('members-select');

// // Глобально объявляем переменные значений состояния "Выбор участников"
// let membersValue;

// // Обновление селектора участников
// function updateMembersSelector() {
//   membersValue = membersSelect.options[membersSelect.selectedIndex].value;
//   console.log(membersValue);
//   return membersValue;
// }

// // Слушатель обновления выбора селектора участников
// membersSelect.addEventListener('change', function() {
//   updateMembersSelector();
//   // genreState = `genres.name=${genreValue}`;
// });

// // function createMembersState(membersValue) {
// //   for (let i = 0; i < membersValue; i++) {
    
// //   }
// // }

// membersButton.addEventListener('click', () => {
//   formMembers.classList.remove('modal__opened');
//   formGenre.classList.add('modal__opened');
// })


// TODO: добавлять варианты выбора жанров через перебор json

// Страница выбора жанра
const genreButton = document.getElementById('genre-button');
const genreSelect = document.getElementById('genre-select');
const genreBackButton = document.getElementById('genre-back');

// Кнопка назад страницы жанров
genreBackButton.addEventListener('click', () => {
  formGenre.classList.remove('modal__opened');
  formStart.classList.add('modal__opened');
  clearGenreSelector();
})

// Глобально объявляем переменные значений состояния "Жанр"
let genreValue;
let genreState;

// Обновление селектора жанров
function updateGenreSelector() {
  genreValue = genreSelect.options[genreSelect.selectedIndex].value;
  console.log(genreValue);
  return genreValue;
}

// Очистка параметров выбора жанра
function clearGenreSelector() {
  console.log('clearGenre'); 
  genreValue = genreSelect.options[genreSelect.selectedIndex = [0]].value;
  console.log(genreValue);
  validateGenre(genreValue);
  return genreValue;
}

// Проверка валидности выбора жанра
function validateGenre(genreValue) {
  if (genreValue == 'null') {
    genreButton.classList.remove('button-accent');
    genreButton.removeEventListener('click', genreAccept);
    console.log('Жанр не прошел валидацию');
  } else {
    genreButton.classList.add('button-accent');
    genreButton.addEventListener('click', genreAccept);
    console.log('Жанр валидирован')
  }
}

// Подтвеждение жанра
function genreAccept() {
    formGenre.classList.remove('modal__opened');
    formRating.classList.add('modal__opened');
}

// Обновление жанра в state
genreSelect.addEventListener('change', function() {
  updateGenreSelector();
  validateGenre(genreValue);
  genreState = `genres.name=${genreValue}`;
  console.log(genreState);
  return genreState;
});


// Страница выбора рейтинга
const highRatingButton = document.getElementById('high-rating-button');
const middleRatingButton = document.getElementById('middle-rating-button');
const lowRatingButton = document.getElementById('low-rating-button');
const ratingButton = document.getElementById('rating-button');
const ratingBackButton = document.getElementById('rating-back');
const ratingSelect = document.getElementById('rating-select');

// Глобально объявляем переменные значений состояния "Рейтинг"
let ratingValue;
let ratingState;

// Кнопка назад на странице рейтинга
ratingBackButton.addEventListener('click', () => {
  formRating.classList.remove('modal__opened');
  formGenre.classList.add('modal__opened');
  if(ratingValue != null) {
    clearRatingSelector();
  };
})

// Обновление рейтинга
function updateRatingSelector() {
  ratingValue = document.querySelector('input[name=rating]:checked').value;
  console.log(ratingValue);
  return ratingValue;
}

// Проверка валидности выбора рейтинга
function validateRating(ratingValue) {
  if (ratingValue = null) {
    ratingButton.classList.remove('button-accent');
    ratingButton.removeEventListener('click', ratingAccept);
    console.log('Рейтинг не прошел валидацию');
  } else {
    ratingButton.classList.add('button-accent');
    ratingButton.addEventListener('click', ratingAccept);
    console.log('Рейтинг валидирован');
  }
}

// Очистка параметров выбора рейтинга
function clearRatingSelector() {
  console.log('clearRating');
  document.querySelector('input[name=rating]:checked').checked = false;
  ratingValue = null;
  validateRating(ratingValue);
  // ratingButton.removeEventListener('click', ratingAccept);
  Array.from(document.querySelectorAll('.select-list_item')).forEach(element => element.classList.remove('select-list_item-accent'));
  return ratingValue;
}

// Кастомные кнопки радио
const radioOptions = document.querySelectorAll('.select-list_item');

// Присвоение кастомных кнопок и обновление в state
radioOptions.forEach((option) => option.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.querySelector('input').checked = true;
    event.target.classList.add('select-list_item-accent');
    Array.from(document.querySelectorAll('.select-list_item')).filter(element => element != event.target).forEach(element => element.classList.remove('select-list_item-accent'));
    
    // Обновление, проверка value и добавление его в state
    updateRatingSelector();
    validateRating(ratingValue);
    ratingState = `rating.kp=${ratingValue}`;
    
    console.log('option button works');
    console.log(ratingState);
    return ratingState
  }
));

// Подтверждение рейтинга
function ratingAccept() {
  formRating.classList.remove('modal__opened');
  formResult.classList.add('modal__opened');
  getSearchData(genreState, ratingState);
}


// Страница отображения результата
const homeButton = document.getElementById('home-button');
const repeatButton = document.getElementById('repeat-button');

const movieTitle = document.getElementById('description_title');
const movieGenre = document.getElementById('description_genre');
const movieYear = document.getElementById('description_year');
const movieRating = document.getElementById('description_rating');
const movieImage = document.getElementById('description_image');
const movieCountry = document.getElementById('description_country');

function clearState() {
  genreState = '';
  ratingState = null;
}

// TODO: сбростить genreState при нажатии на homeButton

// Кнопка home на странице отображения результата
// Очистка формы
homeButton.addEventListener('click', () => {
  console.log('ok');
  formResult.classList.remove('modal__opened');
  formStart.classList.add('modal__opened');
  
  movieTitle.textContent = '';
  movieGenre.textContent = '';
  movieYear.textContent = '';
  movieRating.textContent = '';
  movieImage.src = '';
  movieImage.alt = '';
  movieCountry.textContent = '';
  // clearState();
  clearGenreSelector();
  clearRatingSelector();
})

// Кнопка repeat на странице отображения результата
repeatButton.addEventListener('click', () => {
  getSearchData(genreState, ratingState);
});

