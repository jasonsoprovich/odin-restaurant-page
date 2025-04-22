import "./styles.css";
import loadHeader from "./header.js";
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';
import loadFooter from './footer.js';

function init() {
  loadHeader(headerContainer);

  const logoBtn = document.querySelector('.logo-btn');
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const aboutBtn = document.getElementById('about-btn');

  logoBtn.addEventListener('click', loadHome);
  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  aboutBtn.addEventListener('click', loadAbout);

  loadHome();
  loadFooter();
}

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const headerContainer = document.createElement('div');
headerContainer.id = 'header-container';
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

init();