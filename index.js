const menuWord = document.querySelectorAll('.word');
const hamburger = document.querySelector('.hamburger');
const listMenu = document.querySelector('.navigation');

const menuAppear = () => {
  hamburger.addEventListener('click', () => {
    listMenu.classList.toggle('navigation-active');
    hamburger.classList.toggle('turn');
  });
};
const menuDisappear = () => {
  for (let i = 0; i < menuWord.length; i += 1) {
    menuWord[i].addEventListener('click', () => {
      listMenu.classList.remove('navigation-active');
      hamburger.classList.remove('turn');
    });
  }
};
menuAppear();
menuDisappear();

const data = [
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores eligendi sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores eligendi, sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores eligendi, sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
];

for (let i = 0; i < data.length; i += 1) {
  const modalData = data[i];
  const htmlPop = `<div class="popup-window">
  <div class="title-line">
    <h2 class="pop-title">${modalData.title}</h2>
    <span>X</span>
  </div>
  <div class="tech-used">
    <ul class="techno-used">
      <li class="list-tech">${modalData.technologies[0]}</li>
      <li class="list-tech">${modalData.technologies[1]}</li>
      <li class="list-tech">${modalData.technologies[2]}</li>
    </ul>
  </div>
  <div class="popup-container">
    <div class="img-container">
      <img id="img-pop" src="${modalData.image}" alt="">
    </div>
    <div class="popup-text">
      <p>${modalData.text}</p>
        <div class="popup-btn">
          <button type="button" class="btn-pop"><a href=${modalData.linkLive} class="link-link">See Live<i class="fas fa-external-link-alt"></i></a></button>
          <button type="button" class="btn-pop"><a href=${modalData.linkSource} class="link-link">See Source<i class="fab fa-github"></i></a></button>
        </div>
    </div>
  </div>
  </div>`;

  const sectionWork = document.querySelector('#portfolio > .startPop');
  sectionWork.innerHTML = htmlPop;

  sectionWork.style.display = 'none';

  const buttonRecent = document.querySelectorAll('.see-btn');
  for (let i = 0; i < buttonRecent.length; i += 1) {
    buttonRecent[i].addEventListener('click', () => {
      sectionWork.style.display = 'block';
      window.location.replace('#');
      const buttonToHide = document.querySelector('#portfolio > div.startPop > div > div.title-line > span');

      buttonToHide.addEventListener('click', () => {
        sectionWork.style.display = 'none';
      });
    });
  }
}
