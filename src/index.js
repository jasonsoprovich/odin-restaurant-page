import "./styles.css";
import createLogo from './logo.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadFooter from "./footer.js";

function init() {
  loadHome();
  loadFooter();
}

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const headerContainer = document.createElement('div');
headerContainer.id = 'header-container';

const logoBtn = document.createElement('button');
logoBtn.classList.add('logo-btn');

const logo = createLogo();
logo.classList.add('logo');
logoBtn.appendChild(logo);
headerContainer.appendChild(logoBtn);

const nav = document.createElement('header');
nav.id = 'nav';
nav.innerHTML = `
  <button class='nav-btn' id='home-btn'>Home</button>
  <button class='nav-btn' id='menu-btn'>Menu</button>
  <button class='nav-btn' id='about-btn'>About</button>
`;

headerContainer.appendChild(nav);
container.appendChild(headerContainer);

const contentContainer = document.createElement('div');
contentContainer.id = 'content-container';
container.appendChild(contentContainer);

const content = document.createElement('div');
content.id = 'content';
contentContainer.appendChild(content);

const footerContainer = document.createElement('div');
footerContainer.id = 'footer-container';
container.appendChild(footerContainer);

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

logoBtn.addEventListener('click', loadHome);
homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);

init();