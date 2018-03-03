//onload Header animation
(function () {
    let navbar = document.querySelector('.header-navbar');
    let headerTitle = document.querySelector('.header-title');
    window.onload = function () {
        navbar.style.transform = 'translateX(1272px)';
        navbar.style.transition = '.7s cubic-bezier(.84, 0, .47, 1)';
        //headerTitle.style.transform = 'translateX(1272px)';
        //headerTitle.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)';
        headerTitle.style.animation = 'headerTitleOnload .5s cubic-bezier(.84, 0, .47, 1)';
        headerTitle.style.right = '0'
    }
})();