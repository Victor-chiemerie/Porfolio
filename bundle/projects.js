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
    name: 'Website Portfolio',
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
    technologies: ['html', 'Bootstrap', 'Ruby', 'Rails'],
    liveVersion: 'https://victor-chiemerie.github.io/',
    source: 'https://github.com/Victor-chiemerie/Victor-chiemerie.github.io',
  },
  {
    id: 6,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'profession3 background.png',
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
      <div class="workings1">
      <img class="line2" src="images/${project.featuredImage}" alt="Last-section">
        <h2 class="topic">${project.name}</h2>
          <p>
            ${project.description}
          </p>
            <ul class="list-tag" id=tech${project.id}>
            </ul>
        <button id="project-button-${project.id}" class="buttons">See Project</button>
      </div>
    `;

    others.appendChild(list);
    workPages.appendChild(others);

    const tools = document.querySelector(`#tech${project.id}`);
    let tech = '';

    project.technologies.forEach((tool) => {
      tech += `<li class="tags">${tool}</li>`;
    });

    console.log(tools);

    tools.innerHTML = tech;
  });
};

export default works;