import works from './bundle/projects.js';
import { openMenu, closeMenu } from './bundle/mobileMenu.js';
import formCheck from './bundle/formCheck.js';
import localStore from './bundle/localStorage.js';

const mainProject = {
  name: 'Math-Magicians',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'images/Math-magicians.jpg',
  technologies: ['css', 'html', 'React', 'Ruby'],
  liveVersion: 'https://math-magicians-oowc.onrender.com/calculator',
  source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
};

const workPages = document.getElementById('work-pages');

const mainWork = document.createElement('main');
mainWork.innerHTML = `
    <div class="work-item1">
      <h2>My Recent Works</h2>
      <div></div>
    </div>
      <div class="work-item2">
        <div class="picture"></div>
        <div class="multi-stories">
            <h3>${mainProject.name}</h3>
              <p>
                ${mainProject.description}
              </p>
              <ul>
              </ul>
              <button id="See-Main-Project" class="buttons">See Project</button>
        </div>
      </div>
`;

workPages.appendChild(mainWork);

const tools = document.querySelector('.work-item2 ul');
let list = '';

mainProject.technologies.forEach((tool) => {
  list += `<li>${tool}</li>`;
});

tools.innerHTML = list;

works();
openMenu();
closeMenu();
formCheck();
localStore();

const modalPage = document.getElementById('modal-section');
const modalContent = document.getElementById('modal-contents');

const mainWorkButton = document.getElementById('See-Main-Project');
mainWorkButton.addEventListener('click', () => {
  modalContent.innerHTML = `
  <div class="title-sect">
    <h2>${mainProject.name}</h2>
    <span class="bi-x" id="close-projects"></span>
  </div>
  <ul>${list}</ul>
  <div class="second-sect">
    <div class="image"></div>
    <div class="last-sect">
      <p>${mainProject.description}</p>
      <div class="last-buttons">
        <a href="${mainProject.liveVersion}"><button class="buttons">See Live <span class="bi-box-arrow-right"></span></button></a>
        <a href="${mainProject.source}"><button class="buttons">See Source <span class="bi-github"></span></button></a>
      </div>
    </div>
  </div>`;

  const image = document.querySelector('.image');
  image.style.backgroundImage = `url("${mainProject.featuredImage}")`;

  const closeMainProjects = document.getElementById('close-projects');
  closeMainProjects.addEventListener('click', () => modalPage.classList.add('hide'));

  modalPage.classList.remove('hide');
});