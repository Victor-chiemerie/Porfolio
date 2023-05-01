const fields = document.querySelectorAll('.form-inputs');

let formdata = {
  user_name: '',
  user_email: '',
  user_message: '',
};

const localStorage = () => {
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      formdata[field.name] = field.value;
      localStorage.setItem('portfolio-login-details', JSON.stringify(formdata));
    });
  });

  window.addEventListener('load', () => {
    const data = localStorage.getItem('portfolio-login-details');
    formdata = JSON.parse(data);

    fields.forEach((field) => {
      field.value = formdata[field.name];
    });
  });
};

export default localStorage;
