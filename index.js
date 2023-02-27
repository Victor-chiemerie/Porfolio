import works from './bundle/projects.js';

const mainProject = {
  name: 'Math-Magicians',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'Math-magicians.jpg',
  technologies: ['css', 'html', 'React', 'Ruby'],
  liveVersion: 'https://math-magicians-oowc.onrender.com/calculator',
  source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
};

const workPages = document.querySelector('#work-pages');

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
              <button id="project-button-main" class="buttons">See Project</button>
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