//Animate blue-scroll-to-top button
function animateBtn() {
    scrollBtn.style.display = 'flex';
    scrollBtn.style.opacity = '1';
    scrollBtn.style.transform = 'scale(2)';
    if(document.documentElement.clientWidth < 520) {
        scrollBtn.style.transform = 'scale(1.5)';
    } else {
        scrollBtn.style.transform = 'scale(2)';
    }
}

//Animated appearance of Benefits container
function animateBenefitsContainer() {
    benefits.style.opacity = '1';
}

//Animate appearance of Services container
function animateServicesContainer() {
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
            animateBtn();
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'scale(0.5)'
        }
        if (lastScrollPos > 400) {
            animateBenefitsContainer();
        } else {
            benefits.style.opacity = '0';
        }
        if (lastScrollPos > 1300) {
            animateServicesContainer();
        } else {
            servicesCont.style.opacity = '0';
        }
    });

    // Smooth scroll event of blue-scroll-to-top button
    scrollBtn.addEventListener('click', function (el) {
        document.querySelector('.header').scrollIntoView({behavior: 'smooth'})
    });





