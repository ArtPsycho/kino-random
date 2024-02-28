// const config = {
//   // baseUrl: 'https://api.kinopoisk.dev/v1.4/movie/random?',
//   headers: {
//     'X-API-KEY': 'P0Q2AHA-JJW45CM-P5JZ66Y-K22ZHBW',
//     'Content-Type': 'application/json'
//   },
// };

// function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// };

// // Получение данных фильма
// export function getSearchData() {
//   return fetch(`${config.baseUrl}`, {
//     method: 'GET',
//     headers: config.headers,
//     redirect: 'follow',
    
//   })
//   .then(res => checkResponse(res))
//   .then(result => {
//     const parsedData = JSON.parse(result);
//     console.log(parsedData);
//     console.log('hi')
//   })
// };


// работающий вариант API
// TODO: разобрать на изменяемые компоненты

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
export async function getSearchData() {
return fetch("https://api.kinopoisk.dev/v1.4/movie/random?token=P0Q2AHA-JJW45CM-P5JZ66Y-K22ZHBW&rating.kp=6.8-10", requestOptions)
  .then(response => response.text())
  // .then(result => console.log(result))
  .then(result => {
    const parsedData = JSON.parse(result);
    console.log(parsedData);
    const movieTitle = document.getElementById('description_title');
    const movieGenre = document.getElementById('description_genre');
    const movieYear = document.getElementById('description_year');
    const movieRating = document.getElementById('description_rating');
    const movieImage = document.getElementById('description_image');
    const movieCountry = document.getElementById('description_country');

    movieTitle.textContent = parsedData.name;
    
    movieYear.textContent = `Год выпуска: ${parsedData.year}`;
    movieRating.textContent = `Рейтинг на КиноПоиск: ${parsedData.rating.kp}`;
    movieGenre.textContent = `Жанр: ${parsedData.genres.map(genre => genre.name)}`;
    movieImage.src = parsedData.poster.previewUrl;
    movieImage.alt = parsedData.name;
    movieCountry.textContent = `Страна: ${parsedData.countries.map(country => country.name)}`;
  })

  .catch(error => console.log('error', error));
}



// // Смена данных профиля
// export function changeUserData(profileTitle, profileDescription) {
//   return fetch(`${config.baseUrl}/users/me`, {
//     method: 'PATCH',
//     headers: config.headers,
//     body: JSON.stringify({
//         name: profileTitle,
//         about: profileDescription
//     })
//   })
//   .then(res => checkResponse(res));
// };

// // Смена аватара профиля
// export function changeUserImage(profileImage) {
//   return fetch(`${config.baseUrl}/users/me/avatar`, {
//     method: 'PATCH',
//     headers: config.headers,
//     body: JSON.stringify({
//       avatar: profileImage
//     })
//   })
//   .then(res => checkResponse(res));
// };

