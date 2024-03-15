import { tokenValue } from "./token";

// работающий вариант API
// TODO: разобраться с Content-Type
// TODO: переработать передачу токена  напрямую в headers

// на данный момент токен не обновляется в X-API-KEY 
// после изменения. В значении остается первично 
// инициализированное значние. Поэтому токен передается в fetch

const config = {
  baseUrl: 'https://api.kinopoisk.dev/v1.4/movie/random?',
  headers: {
    // "X-API-KEY": '',
    'Content-Type': 'application/json'
  }
};

// TODO: вынести присвоение полученных данных в index
export async function getSearchData(genreState, ratingState) {
    return fetch(`${config.baseUrl}&${ratingState}&${genreState}&token=${tokenValue}`, {
    method: 'GET',
    redirect: 'follow',
    headers: config.headers
  })
  .then(response => response.text())
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
    movieGenre.textContent = `Жанр: ${parsedData.genres.map(genre => genre.name).join(', ')}`;
    movieImage.src = parsedData.poster.previewUrl;
    movieImage.alt = parsedData.name;
    movieCountry.textContent = `Страна: ${parsedData.countries.map(country => country.name).join(', ')}`;
  })

  .catch(error => console.log('error', error));
}

// TODO: написать запрос на получение списка жанров
// при инициализации страницы


