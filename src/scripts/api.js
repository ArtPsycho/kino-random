import { updateTokenValue } from './token';

// работающий вариант API
// TODO: разобраться с Content-Type

// Исходный объект конфига
const baseConfig = {
  baseUrl: 'https://api.kinopoisk.dev/v1.4/movie/random?',
  headers: {
    'Content-Type': 'application/json'
  }
};

// Функция создания нового конфига при инпуте токена через форму
function createConfig() {
  const updatedTokenValue = updateTokenValue();
  return {
    ...baseConfig,
    headers: {
      ...baseConfig.headers,
      "X-API-KEY": updatedTokenValue
    }
  };
}

// TODO: вынести присвоение полученных данных в index
export async function getSearchData(genreState, ratingState) {
  const config = createConfig();

  return fetch(`${config.baseUrl}&${ratingState}&${genreState}`, {
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

    movieTitle.textContent = parsedData.name;movieYear.textContent = `Год выпуска: ${parsedData.year}`;
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