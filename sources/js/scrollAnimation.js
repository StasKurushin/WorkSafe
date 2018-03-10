//Animate blue-scroll-to-top button
function animateBtn(scrollPos) {
    scrollBtn.style.display = 'flex';
    scrollBtn.style.opacity = '1';
    scrollBtn.style.transform = 'scale(2)'
}

//Animated appearance of Benefits container
function animateBenefitsContainer(scrollPos) {
    benefits.style.opacity = '1';
}

//Animate appearance of Services container
function animateServicesContainer(scrollPos) {
    servicesCont.style.opacity = '1'
}

//Animate module
    let lastScrollPos = 0;
    let scrollBtn = document.querySelector('.scroll-btn');
    let benefits = document.querySelector('.benefits');
    let servicesCont = document.querySelector('.services-container');

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
        if (lastScrollPos > 1150) {
            window.requestAnimationFrame(function () {
                animateServicesContainer(lastScrollPos);
            });
        } else {
            servicesCont.style.opacity = '0';
        }
    });
    // Smooth scroll event of blue-scroll-to-top button
    scrollBtn.addEventListener('click', function (el) {
        document.querySelector('.header').scrollIntoView({behavior: 'smooth'})
    });





