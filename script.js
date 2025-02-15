document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav_menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});