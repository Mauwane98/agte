document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        // Toggle the menu's visibility when the button is clicked
        menuToggle.addEventListener('click', function (event) {
            // Prevent this click from being immediately caught by the document's click listener
            event.stopPropagation(); 
            mobileMenu.classList.toggle('open');
        });
    }

    // --- Close Mobile Menu when clicking outside of it ---
    document.addEventListener('click', function(event) {
        // Check if the menu is open and if the click happened outside of the menu itself
        // and also not on the toggle button.
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileMenu.classList.remove('open');
            }
        }
    });

    // --- Desktop Services Dropdown Menu ---
    const servicesMenuItem = document.querySelector('.nav-item-services');
    const servicesSubMenu = servicesMenuItem ? servicesMenuItem.querySelector('.dropdown-menu') : null;

    if (servicesMenuItem && servicesSubMenu) {
        // Show on mouse enter
        servicesMenuItem.addEventListener('mouseenter', () => {
            servicesSubMenu.classList.remove('dropdown-hidden');
        });

        // Hide on mouse leave
        servicesMenuItem.addEventListener('mouseleave', () => {
            servicesSubMenu.classList.add('dropdown-hidden');
        });
    }

});
