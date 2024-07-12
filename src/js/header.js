document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menuHiddenItems = document.querySelector('.menu-hidden-items');
  const closeMenu = document.querySelectorAll('.menu-hidden-items a');

  menuButton.addEventListener('click', () => {
    if (menuHiddenItems.style.display === 'block') {
      menuHiddenItems.style.display = 'none';
    } else {
      menuHiddenItems.style.display = 'block';
    }
  });

  closeMenu.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      menuHiddenItems.style.display = 'none';
      const targetId = item.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    });
  });

  const menuItems = document.querySelectorAll('.menu-item a');
  menuItems.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault(); // Prevent the default link behavior
      closeBackdrop(); // Close the backdrop
      const targetId = item.getAttribute('href').substring(1); // Get the target section id
      const targetElement = document.getElementById(targetId); // Find the target section
      if (targetElement) {
        targetElement.scrollIntoView(); // Scroll to the target section
      }
    });
  });

  // Function to close the backdrop
  function closeBackdrop() {
    const backdrop = document.querySelector('.backdrop');
    if (backdrop) {
      backdrop.classList.remove('show');
      document.body.style.overflow = ''; // Allow scrolling on the body
      toggleMenuButtons(false); // Show menu-open button
    }
  }

  // Select the menu open button and attach event listener
  const menuOpenButton = document.querySelector('.menu-open-button-btn');
  if (menuOpenButton) {
    menuOpenButton.addEventListener('click', () => {
      const backdrop = document.querySelector('.backdrop');
      if (backdrop) {
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
        toggleMenuButtons(true); // Show close button
      }
    });
  }

  // Event listener for the close button within the backdrop
  const closeButton = document.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeBackdrop);
  }

  // Event listener for the "Order the project" button within the backdrop
  const orderBackdropButton = document.querySelector('.order-backdrop-button');
  if (orderBackdropButton) {
    orderBackdropButton.addEventListener('click', event => {
      closeBackdrop(); // Close the backdrop
    });
  }

  // Function to toggle visibility of menu open and close buttons
  function toggleMenuButtons(isBackdropVisible) {
    const menuOpenButton = document.querySelector('.menu-open-button-btn');
    const closeButton = document.querySelector('.close-button');
    if (isBackdropVisible) {
      menuOpenButton.style.display = 'none';
      closeButton.style.display = 'flex';
    } else {
      menuOpenButton.style.display = 'flex';
      closeButton.style.display = 'none';
    }
  }
});
