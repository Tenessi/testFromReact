// Cookie
const cookie = document.querySelector('.section__cookie');
const closeCookie = document.querySelector('.cookie__button');

setTimeout(() => {
  cookie.style.transform = `translateY(-93px)`;
}, 3000)

closeCookie.addEventListener('click', () => {
  cookie.classList.add('cookie__none');
})

// Form

const form = document.querySelector('.form');
const formInput = document.querySelectorAll('.form__input');

form.onsubmit = function() {
  formInput.forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  })

  return false;
}

