import createLogo from './logo.js';

function loadHeader(headerContainer) {
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
}
export default loadHeader;