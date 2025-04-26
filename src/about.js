function loadAbout() {
  const contentContainer = document.getElementById('content-container');
  const content = document.getElementById('content');

  contentContainer.innerHTML = '';
  content.innerHTML = '';
  content.classList.add('content');

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');

  const headline = document.createElement('h1');
  headline.textContent = 'About';
  aboutDiv.appendChild(headline);

  const description = document.createElement('div');
  description.classList.add('about-description');
  description.innerHTML = `
    <h2>Why “<span class="highlight">Shio</span>”?</h2>
    <p>In Japanese, <span class="highlight">Shio</span> (塩) means salt — a simple ingredient with profound depth. Salt enhances flavor. It preserves. It balances and sharpens. At <span class="highlight">Shio</span>, we carry that same philosophy into everything we do.</p>

    <h2>An Evening at <span class="highlight">Shio</span></h2>
    <p><span class="highlight">Shio</span> is more than a bar — it’s a curated experience for those who appreciate elegance in simplicity. Every detail, from the smooth textures of our custom bar to the atmospheric glow of the lighting, is crafted to ease you into the night.</p>

    <h2>Hours & Reservations</h2>
    <p>Tuesday – Sunday: 5:00pm – 1:00am<br>Closed Mondays</p>
    <p>Walk‑ins welcome; groups of 6+ please <a href="#" class="highlight">contact us</a>.</p>
  `;
  aboutDiv.appendChild(description);

  content.appendChild(aboutDiv);
  contentContainer.appendChild(content);
}

export default loadAbout;