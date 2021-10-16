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
    text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit papapapapapapapapapapapapapapapa',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit qlqlqlqlqlqlqlqlqlqlqlqlqlqlqlqlqlqlq',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores eligendi, sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores eligendi, sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis perferendis autem optio nesciunt! Dicta dolores eligendi, sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio',
  },
];
const sectionWork = document.querySelector('#portfolio > .startPop');
function accsessData(n) {
  sectionWork.innerHTML = `<div class="popup-window">
  <div class="title-line">
    <h2 class="pop-title">${data[n].title}</h2>
    <span>X</span>
  </div>
  <div class="tech-used">
    <ul class="techno-used">
      <li class="list-tech">${data[n].technologies[0]}</li>
      <li class="list-tech">${data[n].technologies[1]}</li>
      <li class="list-tech">${data[n].technologies[2]}</li>
    </ul>
  </div>
  <div class="popup-container">
    <div class="img-container">
      <img id="img-pop" src="${data[n].image}" alt="">
    </div>
    <div class="popup-text">
      <p>${data[n].text}</p>
        <div class="popup-btn">
          <button type="button" class="btn-pop"><a href=${data[n].linkLive} class="link-link">See Live<i class="fas fa-external-link-alt"></i></a></button>
          <button type="button" class="btn-pop"><a href=${data[n].linkSource} class="link-link">See Source<i class="fab fa-github"></i></a></button>
        </div>
    </div>
  </div>
  </div>`;
}
for (let i = 0; i < data.length; i += 1) {
  accsessData(0);

  sectionWork.style.display = 'none';

  const buttonRecent = document.querySelectorAll('.see-btn');
  for (let i = 0; i < buttonRecent.length; i += 1) {
    buttonRecent[i].addEventListener('click', () => {
      sectionWork.style.display = 'block';
      accsessData(i);
      window.location.replace('#');
      const buttonToHide = document.querySelector('#portfolio > div.startPop > div > div.title-line > span');

      buttonToHide.addEventListener('click', () => {
        sectionWork.style.display = 'none';
      });
    });
  }
}

const myFormContact = document.querySelector('#contact > div.contact-form > form');
const mError = document.querySelector('.error-msg');

myFormContact.addEventListener('submit', (event) => {
  const myEmail = document.querySelector('#mail').value;
  if (myEmail !== myEmail.toLowerCase()) {
    mError.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please, write your email in lowercase!';
    event.preventDefault();
  }
});

const userName = document.getElementById('name');
const userText = document.getElementById('comment');
const userEmail = document.getElementById('mail');

function saveAndPrefill() {
  const textData = localStorage.getItem('dataStorage');
  if (textData) {
    const storedData = JSON.parse(textData);
    userName.value = storedData.enterName;
    userEmail.value = storedData.enterEmail;
    userText.value = storedData.enterText;
    return storedData;
  }
  return '';
}

const inputData = {
  enterName: userName.value,
  enterEmail: userEmail.value,
  enterText: userText.value,
};
function storedInput() {
  if (localStorage.getItem('dataStorage') !== JSON.stringify(inputData)) {
    localStorage.setItem('dataStorage', JSON.stringify(inputData));
  }
}

myFormContact.addEventListener('change', () => {
  inputData.enterName = userName.value;
  inputData.enterEmail = userEmail.value;
  inputData.enterText = userText.value;
  storedInput();
});

saveAndPrefill();