//onload Header animation

(function () {
    let navbar = document.querySelector('.navbar-list');
    let headerTitle = document.querySelector('.header__title');
    let intro = document.querySelector('.header__intro');

    window.onload = function () {
        if (window.scrollY < 50) {
            headerAnim();
        } else {
            if (document.documentElement.clientWidth > 767) {
                headerTitle.style.right = '0';
                navbar.style.left = '0'
            } else {
                navbar.style.transform = 'scale(1)';
                headerTitle.style.transform = 'scale(1)';
                navbar.style.position = 'static';
                headerTitle.style.position = 'static';
            }
        }
    };

    function headerAnim() {
        setTimeout( function () {
            if (document.documentElement.clientWidth > 767) {
                navbar.classList.add('navbar-list--slide');
                headerTitle.classList.add('header__title--slide');
                intro.classList.add('header__intro--scaleup');
                setTimeout(function () {
                    navbar.style.position = 'static';
                    headerTitle.style.position = 'static';

                }, 700)
            } else {
                navbar.style.transform = 'scale(1)';
                headerTitle.style.transform = 'scale(1)';
                navbar.classList.add('navbar-list--slide__min-screen');
                headerTitle.classList.add('header__title--slide__min-screen');
                intro.classList.add('header__intro--scaleup');
            }
        }, 500);
    }
})();

