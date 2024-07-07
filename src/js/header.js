document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
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
            }
        });
    }

    // Event listener for the close button within the backdrop
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeBackdrop);
    }
});
