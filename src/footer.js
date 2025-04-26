import createLogo from "./logo";

function loadFooter() {
  const footerContainer = document.getElementById('footer-container');

  footerContainer.innerHTML = '';

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('footer-grid');

  const hoursColumn = document.createElement('div');
  hoursColumn.classList.add('footer-column');
  hoursColumn.innerHTML = `
    <h4>Hours</h4>
    <p>Wed / Thu / Sun: 6pm - 12pm</p>
    <p>Fri / Sat: 6pm - 1am</p>
  `;
  gridContainer.appendChild(hoursColumn);

  const locationColumn = document.createElement('div');
  locationColumn.classList.add('footer-column');
  locationColumn.innerHTML = `
    <h4>Location</h4>
    <p>10333 University Ave NW</p>
    <p>Edmonton, AB</p>
    <p>Canada T6E 6N3</p>
  `;
  gridContainer.appendChild(locationColumn);

  const contactColumn = document.createElement('div');
  contactColumn.classList.add('footer-column');
  contactColumn.innerHTML = `
    <h4>Contact</h4>
    <p>Phone: (780) 430-0011</p>
    <p>Email: info@shiobar.com</p>
  `;
  gridContainer.appendChild(contactColumn);

  footerContainer.appendChild(gridContainer);

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