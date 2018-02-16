
    let lastScrollPos = 0;
    let scrollBtn = document.querySelector('.scroll-btn');
    let benefits = document.querySelector('.benefits');
    let servicesCont = document.querySelector('.services-container');

    function animateBtn(scrollPos) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.transform = 'scale(2)'
    }

    function animateBenefitsContainer(scrollPos) {
        benefits.style.opacity = '1';
    }

    function animateServicesContainer(scrollPos) {
        servicesCont.style.opacity = '1'
    }


    window.addEventListener('scroll', function (e) {
        lastScrollPos = window.scrollY;
        if (lastScrollPos > 500) {
            window.requestAnimationFrame(function () {
                animateBtn(lastScrollPos);
            });
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'scale(0.5)'
        }
        if (lastScrollPos > 400) {
            window.requestAnimationFrame(function () {
                animateBenefitsContainer(lastScrollPos);
            });
        } else {
            benefits.style.opacity = '0';
        }
        if (lastScrollPos > 1405) {
            window.requestAnimationFrame(function () {
                animateServicesContainer(lastScrollPos);
            });
        } else {
            servicesCont.style.opacity = '0';
        }
    });


    scrollBtn.addEventListener('click', function (el) {
        document.querySelector('.header').scrollIntoView({behavior: 'smooth'})
    })





