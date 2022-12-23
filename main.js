// Mobile Menu

const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#close-img');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// Modal section

const workopen = document.querySelectorAll('#project-button');
const modalPage = document.querySelector('#modal-section');
const workPages = document.querySelector('#work-pages');
const modalContent = document.querySelector('#modal-contents');

const mainProject = {
  name: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'Img Placeholder.png',
  technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
  liveVersion: 'https://victor-chiemerie.github.io/',
  source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
};

function toggleModal() {
  modalPage.classList.toggle('hide');
}

workopen.forEach((button) => {
  button.addEventListener('click', toggleModal);
});

const projects = [
  {
    id: 1,
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession1 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession2 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 3,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession3 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession1 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession2 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 6,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession3 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
];

const mainWork = document.createElement('main');
mainWork.classList.add('first-page');
mainWork.innerHTML = `
  <div class="work-container">
    <div class="work-item1">
      <h2 class="title"> My Recent Works </h2>
      <img class="line" src="images/line.png" alt="Middle-section">
    </div>
      <div class="work-item2">
        <div class="picture"></div>
        <div class="multi-stories">
            <h3 class="end-note">${mainProject.name}</h3>
              <p class="paragragh">
                ${mainProject.description}
              </p>
              <ul class="list-tag">
                <li class="tags">css</li>
                <li class="tags">html</li>
                <li class="tags">bootstrap</li>
                <li class="tags">ruby</li>
              </ul>
              <button id="project-button-main" class="buttons">See Project</button>
        </div>
      </div>
  </div>
`;

workPages.appendChild(mainWork);

const mainWorkButton = document.querySelector('#project-button-main');
mainWorkButton.addEventListener('click', () => {
  modalContent.innerHTML = `<div class="title-sect">
    <h2>${mainProject.name}</h2>
    <h3>${mainProject.name}</h3>
    <img src="images/close-icon.png" id="close-projects">
  </div>
  <ul class="modal-list-tag">
    <li class="modal-tags">html</li>
    <li class="modal-tags">Bootstrap</li>
    <li class="modal-tags">Ruby on rails</li>
  </ul>
  <div class="second-sect">
    <div class="second-sect-img">
      <img class="image" src="images/${mainProject.featuredImage}" alt="Snapshoot image">
    </div>
    <div class="last-sect">
      <p>${mainProject.description}</p>
      <div class="last-buttons">
        <a href="https://victor-chiemerie.github.io/"><button class="buttons">See Live <img src="images/Live link.png" alt="live_link"></button></a>
        <a href="https://github.com/Victor-chiemerie/Victor-chiemerie.github.io"><button class="buttons">See Source <img src="images/github.png" alt="github"></button></a>
      </div>
    </div>
  </div>`;

  const closeMainProjects = document.querySelector('#close-projects');
  closeMainProjects.addEventListener('click', () => modalPage.classList.add('hide'));

  modalPage.classList.remove('hide');
});

projects.forEach((project) => {
  const list = document.createElement('li');
  list.classList.add(`profession${project.id}`);
  list.innerHTML = `
    <div class="workings1">
      <h2 class="topic">${project.name}</h2>
        <p>
          ${project.description}
        </p>
          <ul class="list-tag">
            <li class="tags">html</li>
            <li class="tags">bootstrap</li>
            <li class="tags">ruby</li>
          </ul>
      <button id="project-button-${project.id}" class="buttons">See Project</button>
    </div>
  `;

  workPages.appendChild(list);

  const professionBtn = document.querySelector(`#project-button-${project.id}`);
  professionBtn.addEventListener('click', () => {
    modalContent.innerHTML = `<div class="title-sect">
    <h2>${project.name}</h2>
    <h3>${project.name}</h3>
    <img src="images/close-icon.png" id="close-projects">
  </div>
  <ul class="modal-list-tag">
    <li class="modal-tags">html</li>
    <li class="modal-tags">Bootstrap</li>
    <li class="modal-tags">Ruby on rails</li>
  </ul>
  <div class="second-sect">
    <div class="second-sect-img">
      <img class="image" src="images/${project.featuredImage}" alt="Snapshoot image">
    </div>
    <div class="last-sect">
      <p>${project.description}</p>
      <div class="last-buttons">
        <a href="https://victor-chiemerie.github.io/"><button class="buttons">See Live <img src="images/Live link.png" alt="live_link"></button></a>
        <a href="https://github.com/Victor-chiemerie/Victor-chiemerie.github.io"><button class="buttons">See Source <img src="images/github.png" alt="github"></button></a>
      </div>
    </div>
  </div>`;

    const closeMainProjects = document.querySelector('#close-projects');
    closeMainProjects.addEventListener('click', () => modalPage.classList.add('hide'));

    modalPage.classList.remove('hide');
  });
});

// Form Validation

const form = document.querySelector('#form');
const errorMessage = document.querySelector('#error-message');
const userEmail = document.getElementById('user-email');

form.addEventListener('submit', (event) => {
  if (userEmail.value !== userEmail.value.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = 'Email field only can include lowercase characters.';
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.classList.add('hidden');
  }
});

// Local Storage

const fields = document.querySelectorAll('.form-inputs');

const formdata = {
  user_name: '',
  user_email: '',
  user_message: '',
};

fields.forEach((field) => {
  field.addEventListener('input', () => {
    formdata[field.name] = field.value;
    localStorage.setItem('portfolio-login-details', JSON.stringify(formdata));
  });
});

window.addEventListener('load', () => {
  const data = localStorage.getItem('portfolio-login-details');
  const formdata = JSON.parse(data);

  fields.forEach((field) => {
    field.value = formdata[field.name];
  });
});
