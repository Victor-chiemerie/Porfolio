const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');
const userEmail = document.getElementById('user-email');

const formCheck = () => {
  form.addEventListener('submit', (event) => {
    if (userEmail.value !== userEmail.value.toLowerCase()) {
      event.preventDefault();
      errorMessage.innerHTML = 'Email field only can include lowercase characters.';
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
    }
  });
};

export default formCheck;
