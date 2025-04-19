import "./styles.css";
import createLogo from './logo.js';

const content = document.getElementById('content');
const logo = createLogo();
logo.classList.add('logo');
content.appendChild(logo);




  // < h1 > Mercer Speakeasy</h1>
  //   <p>
  //     Welcome to our <span class="highlight">award-winning cocktail bar and eatery</span>, where the atmosphere is dimly
  //     lit
  //     and lively, and the service is laid-back and fun. Celebrate with expertly crafted cocktails and <span
  //       class="highlight">Asian-inspired cuisine</span>, best shared amongst loved ones in a welcoming room that
  //     pulsates to
  //     the rhythm of old-school hip-hop.
  //   </p>
  //   <p>
  //     Located within the historic <span class="highlight">Mercer Building</span> in the heart of downtown, our speakeasy
  //     is
  //     open for walk-ins at <span class="highlight">8 PM on Sundays</span>. Join us for an unforgettable evening.
  //   </p>

console.log('Hello world');
