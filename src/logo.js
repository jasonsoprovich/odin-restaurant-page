export default function createLogo() {
  const logoContainer = document.createElement("div");
  logoContainer.innerHTML = `
<svg width="190" height="110" viewBox="53 0 50 75" xmlns="http://www.w3.org/2000/svg">
      <style>
        .bg { fill: #1a1a1a; }
        .text { font-family: "Montserrat", sans-serif; fill: #ffffff; font-weight: 600; font-size: 36px; letter-spacing: 5px; }
        .kanji { font-family: "Noto Serif JP", serif; fill: #ffffff; font-size: 30px; }
        .crystal {
          fill: none;
          stroke: #ffffff;
          stroke-width: 1.5;
        }
      </style>
      <text x="30" y="65" class="text">SHIO</text>
      <polygon class="crystal" points="25,25 35,10 50,20 48,35 35,45 22,38" />
      </svg>
      `;
      return logoContainer;
    }
    // <text x="240" y="62" class="kanji">塩</text>
    // <rect width="300" height="100" rx="12" class="bg" />
