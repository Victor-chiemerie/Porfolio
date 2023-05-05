const projects = [
  {
    id: 1,
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/profession1 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 2,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/profession2 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 3,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/profession3 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/profession1 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 5,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/profession2 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby', 'Rails'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 6,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/profession3 background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
];

const others = document.createElement('ul');
others.classList.add('profession');

const workPages = document.querySelector('#work-pages');

const works = () => {
  projects.forEach((project) => {
    const list = document.createElement('li');
    list.classList.add(`profession${project.id}`);
    list.innerHTML = `
      <div class="workings">
        <h2 class="topic">${project.name}</h2>
          <p>
            ${project.description}
          </p>
            <ul class="list-tag" id=tech${project.id}>
            </ul>
        <button id="project-button-${project.id}" class="buttons">See Project</button>
      </div>
    `;

    list.style.backgroundImage = `url("${project.featuredImage}")`;

    others.appendChild(list);
    workPages.appendChild(others);

    const tools = document.querySelector(`#tech${project.id}`);
    let tech = '';

    project.technologies.forEach((tool) => {
      tech += `<li class="tags">${tool}</li>`;
    });

    tools.innerHTML = tech;

    // ...............................................................

    const modalPage = document.getElementById('modal-section');
    const modalContent = document.getElementById('modal-contents');
    const professionBtn = document.querySelector(`#project-button-${project.id}`);

    professionBtn.addEventListener('click', () => {
      modalContent.innerHTML = `
      <div class="title-sect">
        <h2>${project.name}</h2>
        <span class="bi-x" id="close-projects"></span>
      </div>
      <ul class="modal-list-tag">
        ${tech}
      </ul>
      <div class="second-sect">
        <div class="image">
        </div>
        <div class="last-sect">
          <p>${project.description}</p>
          <div class="last-buttons">
            <a href="${project.liveVersion}"><button class="buttons">See Live <span class="bi-box-arrow-right"></span></button></a>
            <a href="${project.source}"><button class="buttons">See Source <span class="bi-github"></span></button></a>
          </div>
        </div>
      </div>`;

      const image = document.querySelector('.image');
      image.style.backgroundImage = `url("${project.featuredImage}")`;

      const closeMainProjects = document.getElementById('close-projects');
      closeMainProjects.addEventListener('click', () => modalPage.classList.add('hide'));

      modalPage.classList.remove('hide');
    });
  });
};

export default works;