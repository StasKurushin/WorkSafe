let navbar = document.querySelector('.header-navbar');

function navbarOnload() {
    navbar.style.transform = 'translateX(1272px)';
    navbar.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)'
}
document.addEventListener("DOMContentLoaded", navbarOnload);