const button = document.querySelector('.submit-btn');
const signUpFormDiv = document.querySelector('.sign-up-form');
const successMessageDiv = document.querySelector('.success-message');
const form = document.querySelector('form');

function submitForm() {
    signUpFormDiv.style.display = 'none';
    successMessageDiv.style.display = 'block';
};


form.addEventListener('submit', submitForm);