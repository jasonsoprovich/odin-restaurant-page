function loadHome() {
  const content = document.getElementById('content');

  content.innerHTML = '';

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Mercer Speakeasy';

  const description = document.createElement('p');
  description.innerHTML = `
    Welcome to our <span class="highlight">award-winning cocktail bar and eatery</span>, where the atmosphere is dimly
    lit and lively, and the service is laid-back and fun. Celebrate with expertly crafted cocktails and <span
    class="highlight">Asian-inspired cuisine</span>, best shared amongst loved ones in a welcoming room that pulsates
    to the rhythm of old-school hip-hop.
  `;

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);

  content.appendChild(homeDiv);
}

export default loadHome;