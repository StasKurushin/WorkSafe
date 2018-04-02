let popupTitle = document.querySelector('.popup__title');
let hamburger = document.querySelector('.hamburger');
let swipeNav = new Hammer(popupTitle);

swipeNav.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

swipeNav.on('swipedown swipeup', event => {
    let target = event.currentTarget;
    if (target.classList.contains('popup__title')) {
        if (event.type === 'swipedown') {
            hamburger.style.display = block;
            console.log('swipe')
        }
    }
});
