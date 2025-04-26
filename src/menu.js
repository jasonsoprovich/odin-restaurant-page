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

  const description = document.createElement('div');
  description.classList.add('menu-description');
  description.innerHTML = `
    <h2>Signature Cocktails</h2>
    <p class="italic">Elegant, precise, and deeply rooted in Japanese ingredients and technique.</p>
    <ul>
      <li><span class="highlight">Shinjuku Smoke</span> — Smoked whisky, plum liqueur, ginger</li>
      <li><span class="highlight">Yuzu Hana</span> — Gin, yuzu, elderflower, citrus foam</li>
      <li><span class="highlight">Tokyo Twilight</span> — Sake, lavender syrup, lychee</li>
      <li><span class="highlight">The Bonsai</span> — Matcha gin, vermouth blanc, cucumber bitters</li>
      <li><span class="highlight">Sakura Negroni</span> — Sakura Campari, sweet vermouth</li>
      <li><span class="highlight">Drift</span> — White rum, jasmine tea syrup, lime, coconut water ice</li>
      <li><span class="highlight">Umami Martini</span> — Vodka, dry sake, shiitake and kombu infusion, olive brine mist</li>
      <li><span class="highlight">Hibiscus Hour</span> — Shochu, hibiscus syrup, grapefruit, egg white</li>
      <li><span class="highlight">Red Lantern</span> — Umeshu, mezcal, yuzu, chili tincture, smoked sea salt rim</li>
      <li><span class="highlight">Kuroi Velvet</span> — Black sesame-infused bourbon, vanilla, bitters, black ice cube</li>
      <li><span class="highlight">Cloud Garden</span> — Gin, cucumber, shiso, aloe liqueur, tonic, cotton candy vapor dome (table-side service)</li>
    </ul>

    <h2>Small Plates</h2>
    <p class="italic">Designed for sharing. Prepared with intention.</p>
    <ul>
      <li><span class="highlight">A5 Wagyu Tataki</span> — Seared rare, ponzu, microgreens</li>
      <li><span class="highlight">Miso Glazed Eggplant</span> — Sweet miso, sesame, shiso</li>
      <li><span class="highlight">Toro Tartare</span> — Bluefin belly, quail egg, wasabi soy</li>
      <li><span class="highlight">Crispy Rice + Spicy Tuna</span> — Crunchy rice bites, jalapeño</li>
      <li><span class="highlight">Chawanmushi Royale</span> — Silky steamed egg custard, crab, yuzu zest, ikura</li>
      <li><span class="highlight">Duck Karaage with Sansho Honey</span> — Crispy duck thigh, sansho pepper, floral honey glaze</li>
    </ul>

    <h2>Desserts</h2>
    <ul>
      <li><span class="highlight">Black Sesame Panna Cotta</span> — Roasted sesame, subtle sweetness</li>
      <li><span class="highlight">Matcha Affogato</span> — Vanilla ice cream, ceremonial matcha</li>
      <li><span class="highlight">Yuzu Cheesecake</span> — Creamy yuzu citrus cheesecake, buttery graham crust, candied peel</li>
      <li><span class="highlight">Toasted Rice Ice Cream</span> — Nutty roasted rice ice cream, miso caramel drizzle, sesame tuile</li>
    </ul>
  `;
  menuDiv.appendChild(description);

  content.appendChild(menuDiv);
  contentContainer.appendChild(content);
}

export default loadMenu;