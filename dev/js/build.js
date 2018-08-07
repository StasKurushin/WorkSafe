const navbarListItem = document.querySelectorAll('.navbar-list__item');

[].forEach.call(navbarListItem, el => {
    el.addEventListener('click', event => {
        let target = event.target;
        if (target.hasAttribute('data-scroll')) {
            let dataAttr = target.getAttribute('data-scroll');
            document.querySelector('.' + dataAttr).scrollIntoView({behavior: 'smooth'})
        }
    })
});



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


const contentArr = [
    {
        title: 'Специальная оценка условий труда',
        intro: `<p>Согласно Федеральному закону от 28 декабря 2013 г. № 426-ФЗ «О специальной оценке условий труда» любое
                   предприятие обязано организовать проведение специальной оценки условий труда.
                </p>
                <p>
                    Штраф за нарушение порядка проведения СОУТ в 2018 году в соответствии со ст. 5.27.1 КоАП РФ составляет
                    от 60 до 80 тысяч рублей на юридическое лицо.
                </p>
                <p>
                    Наша компания поможет организовать процесс проведения специальной оценки условий труда с соблюдением 
                    сроков, графиков и документарного обеспечения
                </p>
                <div class="popup-callback">
                    <div class="popup-callback__intro">
                        Узнать цену и получить подробную консультацию
                   </div>
                   <button class="callback__btn">
                       Заказать обратный звонок
                   </button>
               </div>`
    },
    {
        title: 'Знаки безопасности и сигнальная разметка',
        intro: `<p>Для обеспечения безопасности на предприятии и предупреждения рисков получения травм сотрудниками обеспечивается
                   обозначение мест с наибольшим риском при помощи знаков безопасности и сигнальной разметки по ГОСТ 12.4.026-2015 
                   ЦВЕТА СИГНАЛЬНЫЕ, ЗНАКИ БЕЗОПАСНОСТИ И РАЗМЕТКА СИГНАЛЬНАЯ
               </p>
                <p>
                    Мы поможем определить места и тип знаков под каждое предприятие, разработав проект и обеспечив поставку знаков
               </p>
               <div class="popup-callback">
                    <div class="popup-callback__intro">
                        Узнать цену и получить подробную консультацию
                   </div>
                   <button class="callback__btn">
                       Заказать обратный звонок
                   </button>
               </div>`
    },
    {
        title: 'Аутсорсинг охраны труда',
        intro: `<p>
                    Согласно ст.212 Обязанности по обеспечению безопасных условий и охраны труда возлагаются на работодателя. Данную
                    функцию можно возложить по договору на организацию, оказывающие услуги в области охраны труда. Основные 
                    преимущества такого сотрудничества:
                </p>
                <ul>
                <li>
                                    Значительное сокращение бюджета (в 2-3 раза) при организации охраны труда
                                </li>
                                <li>
                                Более качественное и своевременное оказание услуг за счет большого опыта работы с клиентами разного профиля и регулярного прохождения проверок надзорными органами</li>
                        
                        <li>
                        Регулярное отслеживание изменений законодательства и оказание методической помощи руководителям для поддержания организации охраны труда на высочайшем уровне
                        </li>
                        
                       <li>
                       Реальный контроль соблюдения требований законодательства на предприятии</li>
                        
                        
                        <ul>
                            В услуги аутсорсинга входит:
                        </ul>
                            <li>
                                осуществление функций специалиста по охране труда
                            </li>
                            <li>
                                организация и контроль за функционированием системы управления охраной труда
                            </li>
                            <li>
                                разработка полного пакета документов в соответствии со спецификой каждого предприятия
                            </li>
                            <li>
                                контроль за поддержанием документации в актуальном состоянии
                            </li>
                            <li>
                                рганизация медосмотров и психиатрических освидетельствований
                            </li>
                            <li>
                                организация и контроль за своевременным прохождением всех необходимых обучений
                            </li><li>
                                организация и выдача СИЗ для сотрудников
                            </li>
                            <li>
                                аудит и разработка мер по устранению выявленных нарушений требований охраны труда на предприятии для обеспечения безопасности сотрудников
                            </li>
                            <li>
                                представление интересов организации в надзорных органах и при взаимодействии с другими организациями
                            </li>
                       </ul>
                       <div class="popup-callback">
                            <div class="popup-callback__intro">
                                Узнать цену и получить подробную консультацию
                           </div>
                           <button class="callback__btn">
                               Заказать обратный звонок
                           </button>
                       </div>`
    },
    {
        title: 'Аудит по охране труда',
        intro: `<p>Независимо от наличия штатного специалиста по охране труда для всех предприятий важна независимая 
                    оценка действующей системы функционирования охраны труда на предприятии. Опытные специалисты 
                    компании проведут качественный и полнейший аудит охраны труда на предприятии с учетом опыта 
                    взаимодействия с клиентами различного профиля, действующего законодательства и прохождения 
                    проверок надзорными органами.
                </p>
                <p>В услугу аудит входит:</p>
                    
                <ul>
                    <li>аудит документации по охране труда</li>
                                        
                    <li>аудит физических нарушений на предприятии</li>
                    
                    <li>составление отчета и рекомендаций по устранению нарушений</li>
                </ul>
                <div class="popup-callback">
                    <div class="popup-callback__intro">
                        Узнать цену и получить подробную консультацию
                   </div>
                   <button class="callback__btn">
                       Заказать обратный звонок
                   </button>
               </div>`
    },
    {
        title: 'Разработка документов по охране труда',
        intro: `<p>Любая организация обязана иметь и вести определенную документацию по охране труда.</p>
                <p>В пакет документов входит:</p>
                <ul>
                    <li>журналы по охране труда</li>
                    <li>приказы</li>
                    <li>перечни</li>
                    <li>положения</li>
                    <li>программы инструктажей</li>
                    <li>инструкции</li>
                    <li>программы обучения</li>
                    <li>карточки СИЗ</li>
                    <li>документы по обучению сотрудников</li>
                    <li>документы для прохождения медосмотров, психиатрических освидетельствований</li>
                    <li>И многое другое в зависимости от специфики предприятия</li>
                    <li>Данная услуга будет выполнена качественно и в срок опытными специалистами с инструкциями по работе с документами.</li>
                </ul>
                <div class="popup-callback">
                    <div class="popup-callback__intro">
                        Узнать цену и получить подробную консультацию
                   </div>
                   <button class="callback__btn">
                       Заказать обратный звонок
                   </button>
               </div>`
    },

    {
        title: 'Разработка транспортных схем',
        intro: `<p>согласно п. 4.2.5 Постановления Минтруда РФ
                    от 12.05.2003 г. № 28
                    «Об утверждении Межотраслевых правил по охране труда на автомобильном транспорте»
                    Работодатель обязан разработать транспортную схему при движении любых видов техники по территории организации
                    Специалисты нашей компании помогут разработать схемы движения под любое предприятие
                </p>
                <div class="popup-callback">
                    <div class="popup-callback__intro">
                        Узнать цену и получить подробную консультацию
                   </div>
                   <button class="callback__btn">
                       Заказать обратный звонок
                   </button>
               </div>`
    }
];


const modalPopup = (function() {
    
    let popupContent;
    let activeItem;
    let popUpTitle;
    let popUpIntro;
    let navListItem;
    let popup;
    let popupSlideinContent;
    let popupNavbar;
    let popupNavbarListItem;
    let hamburger;
    let hamburgerClosed;
    let popupNavList;
    let hambOpenClose;
    let iconWrapperHamb;
    let iconWrapperClose;
    let iconWrapper;

    function open(idx, target) {
        document.documentElement.style.overflow = 'hidden';
        scrollBtn.style.display = 'none';
        activeItem = idx;
        const templateStore = getTemplate(popupContent, idx);
        target.insertAdjacentHTML('beforeEnd', templateStore);
        popupAnimation();
        addHandlers();
        setActiveItem(idx);
        //document.querySelector('.popup-content').style.overflow = 'auto'
    }

    function addHandlers() {
        document.querySelector('#left').addEventListener('click', _prevItem);
        document.querySelector('#right').addEventListener('click', _nextItem);
        document.querySelector('.popup__close').addEventListener('click', _close);
        document.body.addEventListener('keydown', keyHandler);
        document.querySelector('.hamburger__open-close').addEventListener('click', onClickHamburger);
        document.querySelector('.icon-wrapper__hamb').addEventListener('click', event => {
            let t = event.currentTarget;
            //t.style.zIndex = '';
            t.style.transition = 'transform 1s';
            t.style.transform = 'rotateY(180deg)'
        });
        document.querySelector('.icon-wrapper__close').addEventListener('click', event => {
            let t = event.currentTarget;
            t.style.backfaceVisibility = 'hidden';
            t.style.transition = 'transform 1s';
            t.style.transform = 'rotateY(180deg)'
        });

        /*document.querySelector('.hamburger').addEventListener('click', el => {
           let t = el.target;
           if (t.classList.contains('hamburger')) {
               onClickHamburger()
           }
        });*/
        popUpTitle = document.querySelector('.popup__title');
        popUpIntro = document.querySelector('.popup__intro');
        navListItem = document.querySelectorAll('.popupnav-list__item');
        [].forEach.call(navListItem, (el, idx) => {
            el.addEventListener('click', event => setActiveItem(idx))
        });
    }

    function _prevItem() {
        setActiveItem(activeItem > 0 ? activeItem - 1 : popupContent.length - 1);
    }

    function _nextItem() {
        setActiveItem(activeItem < popupContent.length - 1 ? activeItem + 1 : 0);
    }

    function setActiveItem(idx) {
        popUpTitle.innerHTML =  popupContent[idx].title;
        popUpIntro.innerHTML =  popupContent[idx].intro;
        _setNavListItem(idx);
    }

    function _setNavListItem(idx) {
        navListItem[activeItem].style.background = 'none';
        navListItem[idx].style.background = "rgba(49, 196, 189, 0.44)";
        activeItem = idx;
    }


    function _close() {
        document.querySelector('#popup').remove();
        document.documentElement.style.overflow = '';
        scrollBtn.style.display = 'flex';
        document.body.removeEventListener('keydown', keyHandler)
    }

    function init(content) {
        popupContent = content;
    }

    function keyHandler (event) {
        if (event.key === 'ArrowLeft') {
            _prevItem()
        } else if (event.key === 'ArrowRight') {
            _nextItem()
        } else if (event.key === 'Escape') {
            _close()
        }
    }

    function onClickHamburger() {
        popupNavbar = document.querySelector('.popupnav');
        //popupNavbar.classList.toggle('popupnav--closed');
        hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('hamburger--opened');
    }

    function popupAnimation() {
        popup = document.querySelector('.popup');
        popupSlideinContent = document.querySelector('.popup-content');
        hamburger = document.querySelector('.hamburger');
        hamburgerClosed = document.querySelector('.hamburger--closed');
        window.requestAnimationFrame(function () {
            growPopup();
            popupContentAppear();
        })
    }

    function growPopup() {
        let height = 0;
        let tId = setTimeout(function tick() {
            height += 10;
            popup.style.height = height + 'vh';
            if (height < 100) {
                tId = setTimeout(tick, 1);
            } else {
                popup.style.height = '100vh';
            }
        }, 1);
    }
    
    function popupContentAppear() {
        setTimeout (function() {
            popupSlideinContent.style.display = 'flex';
            hamburger.style.display = 'block';
            if (document.documentElement.clientWidth > 520) {
                document.querySelector('#left').style.display = "block";
                document.querySelector('#right').style.display = "block";
            }
        }, 600);
    }

    function getTemplate(arr, idx) {
        let m  = [];
        let title = arr[idx].title;
        let intro = arr[idx].intro;
        arr.forEach( el => m.push(`<li class="popupnav-list__item">${el.title}</li>`));
        const res = m.join('');
        return `<div class="popup" id="popup">
                    <div class="hamburger">
                        <div class="hamburger__open-close">
                            <div class="icon-wrapper icon-wrapper__close">
                                <i class="material-icons  material-icons__close">clear</i>
                            </div>
                            <div class="icon-wrapper icon-wrapper__hamb">
                                <i class="material-icons material-icons__hamb">dehaze</i>
                            </div>
                        </div>
                        <div class="popupnav popupnav--closed" >
                            <ul class="popupnav-list">
                                ${res}
                            </ul>
                        </div>
                    </div>
                    <div class="popup__arrow" id="left">
                        <i class="material-icons">chevron_left</i>
                    </div>
                    <div class="popup-content">
                        <h2 class="popup__title" id="title">
                          ${title}
                        </h2>
                        <div class="popup__intro" id="intro">
                            ${intro}
                        </div>
                        
                    </div>  
                    <div class="popup__arrow" id="right">
                        <i class="material-icons">chevron_right</i>
                    </div> 
                    <div class="popup__close" id="close">
                            <i class="material-icons material-icons__close">clear</i>                            
                    </div>
               </div>`
    }
    return {openModal: open,
            addContent: init}
})();

const target = document.querySelector('.services');
const items = document.querySelectorAll('.service');
modalPopup.addContent(contentArr);

[].forEach.call(items, function (el, idx) {
    el.addEventListener('click', (event) => {
        modalPopup.openModal(idx, target);
    });
});



(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

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






'use strict';

/*
 * aliases
 * w: window global object
 * d: document
 */
var w = window;
var d = document;

/**
 * indicates if a the current browser is made by Microsoft
 * @method isMicrosoftBrowser
 * @param {String} userAgent
 * @returns {Boolean}
 */
function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
}

// polyfill
function polyfill() {
    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style
        && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    // object gathering original scroll methods
    var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
        if (firstArg === null
            || typeof firstArg !== 'object'
            || firstArg.behavior === undefined
            || firstArg.behavior === 'auto'
            || firstArg.behavior === 'instant') {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
            // first argument is an object and behavior is smooth
            return false;
        }

        // throw error when behavior is not supported
        throw new TypeError(
            'behavior member of ScrollOptions '
            + firstArg.behavior
            + ' is not a valid value for enumeration ScrollBehavior.'
        );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
            return (el.clientHeight + ROUNDING_TOLERANCE) < el.scrollHeight;
        }

        if (axis === 'X') {
            return (el.clientWidth + ROUNDING_TOLERANCE) < el.scrollWidth;
        }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

        return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

        return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
        var isBody;

        do {
            el = el.parentNode;

            isBody = el === d.body;
        } while (isBody === false && isScrollable(el) === false);

        isBody = null;

        return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;

        // avoid elapsed times higher than one
        elapsed = elapsed > 1 ? 1 : elapsed;

        // apply easing to elapsed time
        value = ease(elapsed);

        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;

        context.method.call(context.scrollable, currentX, currentY);

        // scroll more if we have not reached our destination
        if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
        }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();

        // define scroll context
        if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
        } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
        }

        // scroll looping over a frame
        step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
        });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
                w,
                arguments[0].left !== undefined
                    ? arguments[0].left
                    : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : (w.scrollX || w.pageXOffset),
                // use top prop, second argument if present or fallback to scrollY
                arguments[0].top !== undefined
                    ? arguments[0].top
                    : arguments[1] !== undefined
                    ? arguments[1]
                    : (w.scrollY || w.pageYOffset)
            );

            return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
            w,
            d.body,
            arguments[0].left !== undefined
                ? ~~arguments[0].left
                : (w.scrollX || w.pageXOffset),
            arguments[0].top !== undefined
                ? ~~arguments[0].top
                : (w.scrollY || w.pageYOffset)
        );
    };

    // w.scrollBy
    w.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
                w,
                arguments[0].left !== undefined
                    ? arguments[0].left
                    : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : 0,
                arguments[0].top !== undefined
                    ? arguments[0].top
                    : arguments[1] !== undefined
                    ? arguments[1]
                    : 0
            );

            return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
        );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                throw new SyntaxError('Value couldn\'t be converted');
            }

            original.elementScroll.call(
                this,
                // use left prop, first number argument or fallback to scrollLeft
                arguments[0].left !== undefined
                    ? ~~arguments[0].left
                    : typeof arguments[0] !== 'object'
                    ? ~~arguments[0]
                    : this.scrollLeft,
                // use top prop, second argument or fallback to scrollTop
                arguments[0].top !== undefined
                    ? ~~arguments[0].top
                    : arguments[1] !== undefined
                    ? ~~arguments[1]
                    : this.scrollTop
            );

            return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top;

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
            this,
            this,
            typeof left === 'undefined' ? this.scrollLeft : ~~left,
            typeof top === 'undefined' ? this.scrollTop : ~~top
        );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
                this,
                arguments[0].left !== undefined
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                arguments[0].top !== undefined
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
            );

            return;
        }

        this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
        });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
                this,
                arguments[0] === undefined
                    ? true
                    : arguments[0]
            );

            return;
        }

        // LET THE SMOOTHNESS BEGIN!
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
            // reveal element inside parent
            smoothScroll.call(
                this,
                scrollableParent,
                scrollableParent.scrollLeft + clientRects.left - parentRects.left,
                scrollableParent.scrollTop + clientRects.top - parentRects.top
            );

            // reveal parent in viewport unless is fixed
            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth'
                });
            }
        } else {
            // reveal element in viewport
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth'
            });
        }
    };
}

if (typeof exports === 'object') {
    // commonjs
    module.exports = { polyfill: polyfill };
} else {
    // global
    polyfill();
}
/*let popupTitle = document.querySelector('.popup__title');
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
});*/
