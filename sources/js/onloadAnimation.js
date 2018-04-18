//onload Header animation

(function () {
    let navbar = document.querySelector('.navbar-list');
    let headerTitle = document.querySelector('.header__title');
    let startTitle = document.querySelector('.start__title');
    let start = document.querySelector('.start');
    let tId;
    window.onload = function () {
        shine();
        setTimeout( function () {
            clearTimeout(tId);
            start.style.display = 'none';
            if (document.documentElement.clientWidth > 767) {
                navbar.style.left = '0%';
                navbar.style.transition = '.7s cubic-bezier(.84, 0, .47, 1)';
                headerTitle.style.right = '0%';
                headerTitle.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)';
                setTimeout(function () {
                    navbar.style.position = 'static';
                    headerTitle.style.position = 'static';
                }, 700)
            } else {
                navbar.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)';
                navbar.style.transform = 'scale(1)';
                headerTitle.style.transition = '.4s cubic-bezier(.84, 0, .47, 1)';
                headerTitle.style.transform = 'scale(1)';
                navbar.style.position = 'static';
                headerTitle.style.position = 'static';
            }
        }, 4400);
    };

    function shine() {
        let op = 0;
        tId = setTimeout(function tick() {
            op += 0.025;
            startTitle.style.opacity = op;
            if (op < 0.7) {
                tId = setTimeout(tick, 100)
            } else {
                let blink = setInterval (function() {
                    let op = 0;
                    startTitle.style.opacity = op;
                    let timer = setTimeout(function rise() {
                        op += 0.2;
                        startTitle.style.opacity = op;
                        if (op < 0.9) {
                            timer = setTimeout(rise, 1)
                        } else {
                            op = 0;
                            startTitle.style.opacity = op;
                        }
                    })
                }, 100);
                setTimeout(function () {
                    clearInterval(blink)
                },700)
            }
        },500);
    }
})();
