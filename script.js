// Toggle menu on mobile
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

// Open the menu when the bar icon is clicked
openMenu.addEventListener('click', () => {
    navLinks.classList.add('show');
});

// Close the menu when the X icon is clicked
closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show');
});

// Close menu when a link is clicked
const navItems = document.querySelectorAll('#nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});
