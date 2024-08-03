document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-linksm');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
