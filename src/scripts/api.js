const config = {
  baseUrl: 'https://api.kinopoisk.dev/v1.4/movie/random?',
  headers: {
    // authorization: '02d618db-a613-41d9-960e-ca9498e313c1',
    'X-API-KEY': 'P0Q2AHA-JJW45CM-P5JZ66Y-K22ZHBW',
    'Content-Type': 'application/json'
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// Получение данных фильма
export const getSearchData = () => {
  return fetch(`${config.baseUrl}`, {
    method: 'GET',
    headers: config.headers,
    redirect: 'follow'
  })
  .then(res => checkResponse(res));
};


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

