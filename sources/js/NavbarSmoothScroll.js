const navbarListItem = document.querySelectorAll('.navbar-list__item');
    [].forEach.call(navbarListItem, el => {
        el.addEventListener('click', event => {
            let target = event.target;
            if (target.hasAttribute('data-scroll')) {
                let dataAttr = target.getAttribute('data-scroll');
                document.querySelector('.' + dataAttr).scrollIntoView({behavior: 'smooth'})
            }
        })
})

