import { formToken } from ".";
import { formEnterToken } from ".";
import { formStart } from ".";
import { acceptTokenButton } from ".";

// Инпут для ввода токена
const inputToken = document.getElementById('token-input');

// Проверка наличия токена доступа
export function checkToken() {
  if (tokenValue < 31) {
    formToken.classList.add('modal__opened');
    formStart.classList.remove('modal__opened');
    console.log(tokenValue)
  } else {
    formStart.classList.add('modal__opened');
    formToken.classList.remove('modal__opened');
    formEnterToken.classList.remove('modal__opened');
    // console.log(tokenValue);
  }
}

// TODO: в дальнейшем производить валидацию через пробный запрос
// на API для проверки работоспособности токена

// Валидая инпута токена
function tokenValidation() {
  if (inputToken.value < 31) {
    acceptTokenButton.classList.remove('button-accent');
  } else {
    acceptTokenButton.classList.add('button-accent');
  }
}

// Слушатель на валидацию обновления
inputToken.addEventListener('change', tokenValidation)

// Инициализируем токен
export let tokenValue = '';

// Обновление токена после его ввода
export function updateTokenValue() {
  tokenValue = String(inputToken.value);
  console.log(`Input ${inputToken.value}`);
  checkToken();
  // tokenValidation();
  console.log(`value ${tokenValue}`)
  return tokenValue;
}