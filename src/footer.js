import createLogo from "./logo";

function loadFooter() {
  const footerContainer = document.getElementById('footer-container');

  footerContainer.innerHTML = '';

  const footerLogo = createLogo();
  footerLogo.classList.add('footer-logo');

  footerContainer.appendChild(footerLogo);

  const footerContent = document.createElement('p');
  footerContent.innerHTML = `
     2025 Shio. All rights reserved.
  `;

  footerContainer.appendChild(footerContent);
}

export default loadFooter;

// function loadFooter() {
//   const footerContainer = document.getElementById('footer-container');

//   footerContainer.innerHTML = '';

//   const footerContent = document.createElement('p');
//   footerContent.innerHTML = `
//      2025 Shio. All rights reserved.
//   `;

//   footerContainer.appendChild(footerContent);
// }

// export default loadFooter;

