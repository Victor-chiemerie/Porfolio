const fields = document.querySelectorAll('.form-inputs');

let formdata = {
  user_name: '',
  user_email: '',
  user_message: '',
};

window.addEventListener('load', () => {
  const data = localStorage.getItem('portfolio-login-details');
  formdata = JSON.parse(data);

  fields.forEach((field) => {
    field.value = formdata[field.name];
  });
});

const localStore = () => {
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      formdata[field.name] = field.value;
      localStorage.setItem('portfolio-login-details', JSON.stringify(formdata));
    });
  });
};

export default localStore;
