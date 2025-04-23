import header from './assets/hybrid-storytellers-6UEcRVbfZ_0-unsplash.png'

function loadHome() {
  const contentContainer = document.getElementById('content-container');
  const content = document.getElementById('content');

  contentContainer.innerHTML = '';
  
  const headerImage = document.createElement("img");
  headerImage.src = header;
  headerImage.alt = 'Shio Speakeasy Header Image';
  headerImage.classList.add('header-image');
  contentContainer.appendChild(headerImage);
  
  content.innerHTML = '';
  content.classList.add('content');
  
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const headline = document.createElement('h1');
  headline.textContent = 'Shio Speakeasy';
  homeDiv.appendChild(headline);

  const description = document.createElement('p');
  description.innerHTML = `
    Welcome to our <span class="highlight">award-winning cocktail bar and eatery</span>, where the atmosphere is dimly
    lit and lively, and the service is laid-back and fun. Celebrate with expertly crafted cocktails and <span
    class="highlight">Asian-inspired cuisine</span>, best shared amongst loved ones in a welcoming room that pulsates
    to the rhythm of old-school hip-hop.
  `;
  homeDiv.appendChild(description);
  content.appendChild(homeDiv);
  contentContainer.appendChild(content);
}

export default loadHome;