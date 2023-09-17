const button = document.querySelector('.submit-btn');
const signUpFormDiv = document.querySelector('.sign-up-form');
const successMessageDiv = document.querySelector('.success-message');

button.addEventListener('click', () => {
    signUpFormDiv.style.display = 'none';
    successMessageDiv.style.display = 'block';
    event.preventDefault();
})