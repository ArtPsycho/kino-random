import '../pages/index.css';
import { getSearchData } from './api';


// Стартовая страница
const startButton = document.getElementById('start-button');
const formStart = document.getElementById('form-start')
const formResult = document.getElementById('form-result');
const formGenre = document.getElementById('form-genre');
const formRating = document.getElementById('form-rating');
const formMembers = document.getElementById('form-members');


// Кнопка start на стартовой странице
// Переключение на другую страницу
startButton.addEventListener('click', () => {
  formStart.classList.remove('modal__opened');
  // formMembers.classList.add('modal__opened');
  formGenre.classList.add('modal__opened');
})

// Страница выбора количества участников
const membersButton = document.getElementById('members-button');
const membersSelect = document.getElementById('members-select');

// Глобально объявляем переменные значений состояния "Выбор участников"
let membersValue;

// Обновление селектора участников
function updateMembersSelector() {
  membersValue = membersSelect.options[membersSelect.selectedIndex].value;
  console.log(membersValue);
  return membersValue;
}

// Слушатель обновления выбора селектора участников
membersSelect.addEventListener('change', function() {
  updateMembersSelector();
  // genreState = `genres.name=${genreValue}`;
});


// function createMembersState(membersValue) {
//   for (let i = 0; i < membersValue; i++) {
    
//   }
// }

membersButton.addEventListener('click', () => {
  formMembers.classList.remove('modal__opened');
  formGenre.classList.add('modal__opened');
})




// TODO: добавлять варианты выбора жанров через перебор json

// Страница выбора жанра
const genreButton = document.getElementById('genre-button');
const genreSelect = document.getElementById('genre-select');
const genreBackButton = document.getElementById('genre-back');

genreBackButton.addEventListener('click', () => {
  formGenre.classList.remove('modal__opened');
  formStart.classList.add('modal__opened');
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

// Слушатель обновления выбора селектора жанров
genreSelect.addEventListener('change', function() {
  updateGenreSelector();
  genreState = `genres.name=${genreValue}`;
  console.log(genreState);
  if (genreValue != '0') {
    genreButton.classList.add('button-accent');
    genreButton.addEventListener('click', () => {
      formGenre.classList.remove('modal__opened');
      // formResult.classList.add('modal__opened');
      formRating.classList.add('modal__opened');
      console.log(genreState);
    })
  } else {
    genreButton.classList.remove('button-accent');
  }
  return genreState;
});

// TODO: ограничить кнопки в функцию


// Глобально объявляем переменные значений состояния "Рейтинг"
let ratingValue;
let ratingState;

// Страница выбора рейтинга
const highRatingButton = document.getElementById('high-rating-button');
const middleRatingButton = document.getElementById('middle-rating-button');
const lowRatingButton = document.getElementById('low-rating-button');
const ratingButton = document.getElementById('rating-button');
const ratingBackButton = document.getElementById('rating-back');


ratingBackButton.addEventListener('click', () => {
  formRating.classList.remove('modal__opened');
  formGenre.classList.add('modal__opened');
})

// Обновление value при переключении радио
function updateRatingSelector() {
  ratingValue = document.querySelector('input[name=rating]:checked').value;
  console.log(ratingValue);

  // if (ratingValue != null) {
  //   ratingButton.classList.add('button-accent');
  //   ratingButton.addEventListener('click', () => {
  //     formRating.classList.remove('modal__opened');
  //     ratingState = `rating.kp=${ratingValue}`;
  //     console.log(ratingState);
  //     getSearchData(genreState, ratingState);
  //     formResult.classList.add('modal__opened');
  //   })
  // } else {
  //   ratingButton.classList.remove('button-accent');
  // }

  if (ratingValue == null) {
    ratingButton.classList.remove('button-accent');
  } else {
    ratingButton.classList.add('button-accent');
    ratingButton.addEventListener('click', () => {
      formRating.classList.remove('modal__opened');
      ratingState = `rating.kp=${ratingValue}`;
      console.log(ratingState);
      getSearchData(genreState, ratingState);
      formResult.classList.add('modal__opened');
    })
  }
  return ratingValue;
}

// Привязываем кнопки к радио
highRatingButton.addEventListener('click', () => {
  document.getElementById('high-rating-radio-button').checked = true;
  document.getElementById('middle-rating-radio-button').checked = false;
  document.getElementById('low-rating-radio-button').checked = false;
  console.log('high-rating');
  updateRatingSelector();
  highRatingButton.closest('.select-list_item').classList.add('select-list_item-accent');
  middleRatingButton.closest('.select-list_item').classList.remove('select-list_item-accent');
  lowRatingButton.closest('.select-list_item').classList.remove('select-list_item-accent');
})

middleRatingButton.addEventListener('click', () => {
  document.getElementById('middle-rating-radio-button').checked = true;
  document.getElementById('high-rating-radio-button').checked = false;
  document.getElementById('low-rating-radio-button').checked = false;
  console.log('middle-rating');
  updateRatingSelector()
  middleRatingButton.closest('.select-list_item').classList.add('select-list_item-accent');
  // middleRatingButton.filter(closest('.select-list_item')).classList.remove('select-list_item-accent');
  highRatingButton.closest('.select-list_item').classList.remove('select-list_item-accent');
  lowRatingButton.closest('.select-list_item').classList.remove('select-list_item-accent');
})

lowRatingButton.addEventListener('click', () => {
  document.getElementById('low-rating-radio-button').checked = true;
  document.getElementById('high-rating-radio-button').checked = false;
  document.getElementById('middle-rating-radio-button').checked = false;
  console.log('low-rating');
  updateRatingSelector()
  lowRatingButton.closest('.select-list_item').classList.add('select-list_item-accent');
  highRatingButton.closest('.select-list_item').classList.remove('select-list_item-accent');
  middleRatingButton.closest('.select-list_item').classList.remove('select-list_item-accent');
})

// TODO: ограничить возможность нажатия кнопки без выбоа жанра

// Слушатель на кнопку действия страницы рейтинга
// Добавляет значение value радио в общий стейт
// ratingButton.addEventListener('click', () => {
//   formRating.classList.remove('modal__opened');
  
//   updateRatingSelector();
//   ratingState = `rating.kp=${ratingValue}`;
//   console.log(ratingState);
//   getSearchData(genreState, ratingState);
//   formResult.classList.add('modal__opened');
// })


// Страница отображения результата
const homeButton = document.getElementById('home-button');
const repeatButton = document.getElementById('repeat-button');

const movieTitle = document.getElementById('description_title');
const movieGenre = document.getElementById('description_genre');
const movieYear = document.getElementById('description_year');
const movieRating = document.getElementById('description_rating');
const movieImage = document.getElementById('description_image');
const movieCountry = document.getElementById('description_country');



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

})

// Кнопка repeat на странице отображения результата
repeatButton.addEventListener('click', () => {
  getSearchData(genreState, ratingState);
});

