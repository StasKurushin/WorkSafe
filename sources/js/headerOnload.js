//onload Header animation

(function () {
    let navbar = document.querySelector('.navbar-list');
    let headerTitle = document.querySelector('.header__title');
    window.onload = function () {
       if (document.documentElement.clientWidth > 767)
        {
            navbar.style.left = '0%';
            navbar.style.transition = '.7s cubic-bezier(.84, 0, .47, 1)';
            headerTitle.style.right = '0%';
            headerTitle.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)';
            setTimeout(function () {
                navbar.style.position= 'static';
                headerTitle.style.position = 'static';
            }, 700)
        } else {
           //navbar.style.transform = 'scale(0)';
           navbar.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)';
           navbar.style.transform = 'scale(1)';
           //headerTitle.style.transform = 'scale(0)';
           headerTitle.style.transition = '.4s cubic-bezier(.84, 0, .47, 1)';
           headerTitle.style.transform = 'scale(1)';
           navbar.style.position= 'static';
           headerTitle.style.position = 'static';
       }
    }
})();
