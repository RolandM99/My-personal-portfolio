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

// Popup window

const data = [
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
    linkSource: 'https://github.com/RolandM99/My-personal-portfolio'
  },
  // {
  //   title: 'Keeping track of hundreds of components website',
  //   technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
  //   image: 'images/popup-image.png',
  //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //   linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
  //   linkSource: 'https://github.com/RolandM99/My-personal-portfolio'
  // },
  // {
  //   title: 'Keeping track of hundreds of components website',
  //   technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
  //   image: 'images/popup-image.png',
  //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //   linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
  //   linkSource: 'https://github.com/RolandM99/My-personal-portfolio'
  // },
  // {
  //   title: 'Keeping track of hundreds of components website',
  //   technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
  //   image: 'images/popup-image.png',
  //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //   linkLive: 'https://rolandm99.github.io/My-personal-portfolio/',
  //   linkSource: 'https://github.com/RolandM99/My-personal-portfolio'
  // },
]


const htmlPop = `<div class="popup-window">
<div class="titlt-line">
  <h2>${data[0].title}</h2>
  <small>X</small>
</div>
<div class="techno-used">
  <ul>
    <li>${data[0].technologies[0]}</li>
    <li>${data[0].technologies[1]}</li>
    <li>${data[0].technologies[2]}</li>
  </ul>
</div>
<div class="popup-container">
  <div class="img-container">
    <img src="${data[0].image}" alt="">
  </div>
  <div class="popup-text">
    <p>${data[0].text}</p>
       <div class="popup-btn">
         <button type="button" href=${data[0].linkLive} class="btn-pop">See Live</button>
         <button type="button" href=${data[0].linkSource} class="btn-pop">See Source</button>
       </div>
  </div>
</div>
</div>`;

const sectionWork = document.querySelector('#portfolio > .startPop');
sectionWork.innerHTML = htmlPop;


sectionWork.style.display = 'none';

const button = document.querySelector('#recent-btn');
// const popupWin = document.querySelector('.popup-window');

button.addEventListener('click', () => {
  sectionWork.style.display = 'block';
});

buttonToHide = document.querySelector('#portfolio > div.startPop > div > div.titlt-line > small');

buttonToHide.addEventListener('click', () => {
  sectionWork.style.display = 'none';
});