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
    text: 'loromu dhfgkjdshggfwkejhgtfi',
    button: ['See Live', 'See Source'],
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'loromu dhfgkjdshggfwkejhgtfi',
    button: ['See Live', 'See Source'],
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'loromu dhfgkjdshggfwkejhgtfi',
    button: ['See Live', 'See Source'],
  },
  {
    title: 'Keeping track of hundreds of components website',
    technologies: ['HTML', 'Boostrap', 'Ruby on rails'],
    image: 'images/popup-image.png',
    text: 'loromu dhfgkjdshggfwkejhgtfi',
    button: ['See Live', 'See Source'],
  },
]


const data = `<div class="popup-window">
<div class="titlt-line">
  <h2>Keeping Tracks of hundreds of components websites</h2>
  <span>X</span>
</div>
<div class="techno-used">
  <ul>
    <li>HTML</li>
    <li>Bootstrap</li>
    <li>Ruby on Rails</li>
  </ul>
</div>
<div class="popup-container">
  <div class="img-container">
    <img src="../images/popup-image.png" alt=" ">
  </div>
  <div class="popup-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure in odit officiis 
      perferendis autem optio nesciunt! Dicta dolores eligendi,
       sapiente magni quidem repudiandae earum, harum quos facilis nesciunt aperiam.</p>
       <div class="popup-btn">
         <button type="button" class="btn-pop">See Live</button>
         <button type="button" class="btn-pop">See Source</button>
       </div>
  </div>
</div>
</div>`;


const button = document.getElementsByClassName('see-btn');
const popupWin = document.querySelector('.popup-window');

button.addEventListener('click', () => {
  popupWin.classList.add('.show');
});