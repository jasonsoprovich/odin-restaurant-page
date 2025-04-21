function loadMenu() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const headline = document.createElement('h1');
  headline.textContent = 'Menu';

  const description = document.createElement('p');
  description.innerHTML = `
  Menu placeholder
  `;

  menuDiv.appendChild(headline);
  menuDiv.appendChild(description);

  content.appendChild(menuDiv);
}

export default loadMenu;