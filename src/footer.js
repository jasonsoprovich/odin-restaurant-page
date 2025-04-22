function loadFooter() {
  const footerContainer = document.getElementById('footer-container');

  footerContainer.innerHTML = '';

  const footerContent = document.createElement('p');
  footerContent.innerHTML = `
     2025 Shio. All rights reserved.
  `;

  footerContainer.appendChild(footerContent);
}

export default loadFooter;

