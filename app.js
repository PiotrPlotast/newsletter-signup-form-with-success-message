const signUpFormDiv = document.querySelector('.card__sign-up-form');
const successMessageDiv = document.querySelector('.card__success-message');
const form = document.querySelector('form');
const userEmail = document.querySelector('#email');
const userEmailSpan = document.querySelector('.user-email')
const dismissBtn = document.querySelector('.dismiss-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    signUpFormDiv.style.display = 'none';
    successMessageDiv.style.display = 'block';
    userEmailSpan.innerHTML = userEmail.value;
});

dismissBtn.addEventListener('click', function () {
    signUpFormDiv.style.display = 'block';
    successMessageDiv.style.display = 'none';
})