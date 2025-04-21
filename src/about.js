function loadAbout() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');

  const headline = document.createElement('h1');
  headline.textContent = 'About';

  const description = document.createElement('p');
  description.innerHTML = `
  About placeholder
  `;

  aboutDiv.appendChild(headline);
  aboutDiv.appendChild(description);

  content.appendChild(aboutDiv);
}

export default loadAbout;