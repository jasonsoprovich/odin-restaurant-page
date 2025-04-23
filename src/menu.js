function loadMenu() {
  const contentContainer = document.getElementById('content-container');
  const content = document.getElementById('content');

  contentContainer.innerHTML = '';
  content.innerHTML = '';
  content.classList.add('content');

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const headline = document.createElement('h1');
  headline.textContent = 'Menu';
  menuDiv.appendChild(headline);

  const description = document.createElement('p');
  description.innerHTML = `
  Explore our selection of Asian-inspired dishes and handcrafted cocktails.
  `;
  menuDiv.appendChild(description);

  content.appendChild(menuDiv);
  contentContainer.appendChild(content);
}

export default loadMenu;