import { formToken } from ".";
import { formEnterToken } from ".";
import { formStart } from ".";
import { acceptTokenButton } from ".";

// Инпут для ввода токена
export const inputToken = document.getElementById('token-input');

// Инициализируем токен
export let tokenValue = inputToken.value;

// Проверка наличия токена доступа
export function checkToken() {
  if (tokenValue.length < 31) {
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
export function tokenValidation() {
  if (inputToken.value.length < 31) {
    acceptTokenButton.classList.remove('button-accent');
  } else {
    acceptTokenButton.classList.add('button-accent');
  }
}

// Слушатель на валидацию обновления
inputToken.addEventListener('change', () => {
  updateTokenValue();
  tokenValidation();
})

// Обновление токена после его ввода
export function updateTokenValue() {
  tokenValue = String(inputToken.value);
  console.log(`Input ${inputToken.value}`);
  console.log(`value ${tokenValue}`)
  return tokenValue;
}