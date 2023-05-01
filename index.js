import works from './bundle/projects.js';
import toggleMenu from './bundle/mobileMenu.js';

const mainProject = {
  name: 'Math-Magicians',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'Math-magicians.jpg',
  technologies: ['css', 'html', 'React', 'Ruby'],
  liveVersion: 'https://math-magicians-oowc.onrender.com/calculator',
  source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
};

const workPages = document.getElementById('work-pages');

const mainWork = document.createElement('main');
mainWork.classList.add('first-page');
mainWork.innerHTML = `
    <div class="work-item1">
      <h2 class="title">My Recent Works</h2>
      <div class="line"></div>
    </div>
      <div class="work-item2">
        <div class="picture"></div>
        <div class="multi-stories">
            <h3 class="end-note">${mainProject.name}</h3>
              <p class="paragragh">
                ${mainProject.description}
              </p>
              <ul class="list-tag">
              </ul>
              <button id="See-Main-Project" class="buttons">See Project</button>
        </div>
      </div>
`;

workPages.appendChild(mainWork);

const tools = document.querySelector('.work-item2 ul');
let list = '';

mainProject.technologies.forEach((tool) => {
  list += `<li class="tags">${tool}</li>`;
});

tools.innerHTML = list;

works();
toggleMenu();

const workopen = document.querySelectorAll('#project-button');
const modalPage = document.getElementById('modal-section');
const modalContent = document.getElementById('modal-contents');

const toggleModal = () => {
  modalPage.classList.toggle('hide');
};

workopen.forEach((button) => {
  button.addEventListener('click', toggleModal);
});

const mainWorkButton = document.getElementById('See-Main-Project');
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