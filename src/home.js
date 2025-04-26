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
  headline.textContent = 'A Hidden Gem in the Heart of the City';
  homeDiv.appendChild(headline);

  const description = document.createElement('div');
  description.innerHTML = `
    <p>Tucked behind an unmarked door, <span class='highlight'>Shio</span> is an award-winning Japanese cocktail bar and eatery defined by stillness, intimacy, and style. In our softly lit space, lofi hip-hop floats from the decks of a nightly DJ, setting the mood for refined conversation and slow enjoyment.

    We invite you to gather close, sip something extraordinary, and savor our elevated Japanese-inspired menu designed for sharing.</p>

    <ul>
        <li>Small plates. Perfect Pours. Quiet Celebration</li>
        <li>Lofi beats. Always at a conversation volume.</li>
        <li>Crafted cocktails with a Tokyo soul.</li>
    </ul>
  `;
  homeDiv.appendChild(description);
  content.appendChild(homeDiv);
  contentContainer.appendChild(content);
}

export default loadHome;