import '../pages/index.css';
import { getSearchData } from './api';


// import { openPopup, closePopup } from './modal';
// import { createCard, likeCard, removeCard } from './card';
// import { enableValidation, clearValidation } from './validation';
// import { getInitialCards, getUserData, changeUserData, changeUserImage, postCard } from './api';

// // DOM узлы
// const content = document.querySelector('.content');
// const placesList = document.querySelector('.places__list');

// let userId;

// // Конфигурация валидации форм
// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// };

// // Редактирование профиля//

// // Модальное окно "Редактирование профиля"
// const editPopup = document.querySelector('.popup_type_edit');
// const editOpenButton = document.querySelector('.profile__edit-button');
// const editCloseButton = editPopup.querySelector('.popup__close');
// const editForm = document.forms['edit-profile'];
// const editNameInput = editForm.elements['name'];
// const editDescriptionInput = editForm.elements['description'];
// const profileTitle = document.querySelector('.profile__title');
// const profileDescription = document.querySelector('.profile__description');
// const editPopupSaveButton = editForm.querySelector('.popup__button');

// // Открытие модального окна "Редактирование профиля"
// editOpenButton.addEventListener('click', () => {
//   openPopup(editPopup);
//   editNameInput.value = profileTitle.textContent;
//   editDescriptionInput.value = profileDescription.textContent;
//   clearValidation(editForm, validationConfig);
// });

// // Закрытие модального окна "Редактирование профиля"
// editCloseButton.addEventListener('click', () => {
//   closePopup(editPopup);
// })

// // Отправка формы модального окна "Редактирование профиля"
// function editFormSubmit(event) {
//   event.preventDefault();
//   editPopupSaveButton.textContent = 'Сохранение...';

//   changeUserData(editNameInput.value, editDescriptionInput.value)
//     .then(() => {
//       profileTitle.textContent = editNameInput.value;
//       profileDescription.textContent = editDescriptionInput.value;
//       closePopup(editPopup);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       editPopupSaveButton.textContent = 'Сохранение';
//     });
// }

// // Прикрепление обработчика события к форме модального окна "Редактирование профиля"
// editForm.addEventListener('submit', editFormSubmit); 

// // Редактирование картинки профиля
// const avatarPopup = document.querySelector('.popup_type_avatar');
// const profileImage = document.querySelector('.profile__image');
// const avatarForm = document.forms['new-avatar'];
// const avatarInput = avatarForm.elements['link'];
// const avatarCloseButton = avatarPopup.querySelector('.popup__close');
// const avatarPopupSaveButton = avatarForm.querySelector('.popup__button');

// // Открытие модального окна "Обновить аватар"
// profileImage.addEventListener('click', () => {
//   avatarForm.reset();
//   openPopup(avatarPopup);
//   clearValidation(avatarForm, validationConfig);
// })

// // Закрытие модального окна "Обновить профиль"
// avatarCloseButton.addEventListener('click', () => {
//   closePopup(avatarPopup);
// })

// // Отправка формы модального окна "Обновить профиль"
// function avatarFormSubmit(event) {
//   event.preventDefault();
//   avatarPopupSaveButton.textContent = 'Сохранение...';

//   changeUserImage(avatarInput.value)
//   .then(() => {
//     profileImage.style = `background-image: url('${avatarInput.value}')`;
//     closePopup(avatarPopup);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     avatarPopupSaveButton.textContent = 'Сохранение';
//   })
// }

// // Прикрепление обработчика события к форме модального окна "Обновление аватара"
// avatarForm.addEventListener('submit', avatarFormSubmit);

// // Добавление карточки//

// // Модальное окно "Добавление карточки"
// const addPopup = document.querySelector('.popup_type_new-card');
// const addOpenButton = document.querySelector('.profile__add-button');
// const addCloseButton = addPopup.querySelector('.popup__close');
// const addForm = document.forms['new-place'];
// const addNameInput = addForm.elements['place-name'];
// const addLinkInput = addForm.elements['link'];
// const addPopupSaveButton = addForm.querySelector('.popup__button');
// console.log(addPopupSaveButton);

// // Открытие модального окна "Добавление карточки"
// addOpenButton.addEventListener('click', () => {
//   addForm.reset();
//   openPopup(addPopup);
//   clearValidation(addForm, validationConfig);
// })

// // Закрытие модального окна "Добавление карточки"
// addCloseButton.addEventListener('click', () => {
//   closePopup(addPopup);
// })

// // Отправка формы модального окна "Добавление карточки"
// function addFormSubmit(event) {
//   event.preventDefault();
//   addPopupSaveButton.textContent = 'Сохранение...';

//   postCard(addNameInput.value, addLinkInput.value)
//     .then((cardValue) => {
//       placesList.prepend(createCard(cardValue, userId, removeCard, likeCard, openImage));
//       addForm.reset();
//       closePopup(addPopup);
//     })
//     .catch((error) => {
//       console.log(error);
//     })  
//     .finally(() => {
//       addPopupSaveButton.textContent = 'Сохранить';
//     })
// }

// // Прикрепление обработчика события к форме модального окна "Добавление карточки"
// addForm.addEventListener('submit', addFormSubmit);

// // Открытие картинки

// // Модальное окно "Картинка"
// const imagePopup = document.querySelector('.popup_type_image');
// const imageCloseButton = imagePopup.querySelector('.popup__close');
// const imageCard = imagePopup.querySelector('.popup__image');
// const imageCaption = imagePopup.querySelector('.popup__caption');

// // Функция открытия модального окна "Картинка"
// function openImage(cardValue) {
//   imageCaption.textContent = cardValue.name;
//   imageCard.src = cardValue.link;
//   imageCard.alt = cardValue.name;
//   openPopup(imagePopup);
// }

// // Закрытие модального окна "Картинка"
// imageCloseButton.addEventListener('click', () => {
//   closePopup(imagePopup);
// })

// // Валидация форм
// enableValidation(validationConfig);

// Promise.all([getInitialCards(), getUserData()])
//   .then(([initialCardsData, userData]) => {
//     userId = userData._id;

//     profileTitle.textContent = userData.name;
//     profileDescription.textContent = userData.about;
//     profileImage.style = `background-image: url('${userData.avatar}')`;

//     initialCardsData.forEach((cardValue) => {
//       placesList.append(createCard(cardValue, userId, removeCard, likeCard, openImage));
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   })





// TODO: разобраться с промисом

// Promise.all(getSearchData())
//   .then((result) => {
//     const parsedData = JSON.parse(result);
//     console.log(parsedData);

//     const movieTitle = document.getElementById('description_title');
//     const movieGenre = document.getElementById('description_genre');
//     const movieYear = document.getElementById('description_year');
//     const movieRating = document.getElementById('description_rating');
//     const movieImage = document.getElementById('description_image');
//     const movieCountry = document.getElementById('description_country');

//     movieTitle.textContent = parsedData.name;
    
//     movieYear.textContent = `Год выпуска: ${parsedData.year}`;
//     movieRating.textContent = `Рейтинг на КиноПоиск: ${parsedData.rating.kp}`;
//     movieGenre.textContent = `Жанр: ${parsedData.genres.map(genre => genre.name).join(', ')}`;
//     movieImage.src = parsedData.poster.previewUrl;
//     movieImage.alt = parsedData.name;
//     movieCountry.textContent = `Страна: ${parsedData.countries.map(country => country.name).join(', ')}`;
//   })
//   .catch((error) => {
//     console.log(error);
//   })



// Стартовая страница
const startButton = document.getElementById('start-button');
const formStart = document.getElementById('form-start')
const formResult = document.getElementById('form-result');
const formGenre = document.getElementById('form-genre');

// Кнопка start на стартовой странице
// Переключение на другую страницу
startButton.addEventListener('click', () => {
  formStart.classList.remove('modal__opened');
  formGenre.classList.add('modal__opened');
})



// Страница выбора жанра
const genreButton = document.getElementById('genre-button');
const genreSelect = document.getElementById('genre-select');

// Глобально объявляем переменные
var genreValue;
var genreState;

// Обновление селектора жанров
function updateSelector() {
  genreValue = genreSelect.options[genreSelect.selectedIndex].value;
  console.log(genreValue);
  return genreValue;
}

// Слушатель обновления выбора селектора жанров
// genreSelect.addEventListener('change', updateSelector);
genreSelect.addEventListener('change', function() {
  updateSelector();
  genreState = `genres.name=${genreValue}`;
  console.log(genreState);
  return genreState;
});


genreButton.addEventListener('click', () => {
  getSearchData(genreState);
  formGenre.classList.remove('modal__opened');
  formResult.classList.add('modal__opened');
  console.log(genreState);
  
})


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
  getSearchData(genreState);
});

