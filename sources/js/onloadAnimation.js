//onload Header animation

(function () {
    let navbar = document.querySelector('.navbar-list');
    let headerTitle = document.querySelector('.header__title');
    let startTitle = document.querySelector('.start__title');
    let start = document.querySelector('.start');
    let target = document.querySelector('.start-container');
    let tId;

    window.onload = function () {
        if (window.scrollY < 50) {
            startAnim();
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

    function shine() {
        let op = 0;
        tId = setTimeout(function tick() {
            op += 0.025;
            startTitle.style.opacity = op;
            if (op < 0.7) {
                tId = setTimeout(tick, 100)
            }
        });
    }
    function rotate() {
        target.classList.add('start-container--rotate');
    }
    function startAnim() {
        start.style.display = 'block';
        shine();
        setTimeout(rotate, 2500);

    }
    function headerAnim() {
        setTimeout( function () {
            start.style.display = 'none';
            clearTimeout(tId);
            if (document.documentElement.clientWidth > 767) {
                navbar.classList.add('navbar-list--slide');
                headerTitle.classList.add('header__title--slide');
                setTimeout(function () {
                    navbar.style.position = 'static';
                    headerTitle.style.position = 'static';
                }, 700)
            } else {
                navbar.style.transform = 'scale(1)';
                headerTitle.style.transform = 'scale(1)';
                navbar.classList.add('navbar-list--slide__min-screen');
                headerTitle.classList.add('header__title--slide__min-screen');
            }
        }, 3000);
    }
})();

