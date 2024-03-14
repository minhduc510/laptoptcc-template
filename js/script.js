const headerLogo = document.querySelector('.header-logo')
const headerBottom = document.querySelector('.header-bottom')
const headerBottomChild = document.querySelector('.header-bottom-content')
const headerTop = document.querySelector('.header-top')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const mainContent = document.querySelector('main')
const btnHeaderMenuList = document.querySelector('.btn-menu-list')
const menuHeaderWrapper = document.querySelector('.menu-header-wrapper')

const textSupportClient = document.querySelector('.text-support-client')
const menuSupportClient = document.querySelector('.menu-support-client')

const textInfoAbout = document.querySelector('.text-info-about')
const menuAboutInfo = document.querySelector('.menu-about-info')

const iconMenuMobile = document.querySelector('.icon-menu-mobile')
const overlayMenuMobile = document.querySelector('.overlay-menu-mobile')
const menuMobile = document.querySelector('.menu-mobile')


const distanceFromTopToMenuHeaderWrapper = menuHeaderWrapper.getBoundingClientRect().top + menuHeaderWrapper.offsetHeight

overlayMenuMobile.onclick = () => {
    header.style.zIndex = '9'
    mainContent.style.zIndex = '9'
    footer.style.zIndex = '9'

    setTimeout(() => {
        header.style.transform = 'translateX(0)'
        mainContent.style.transform = 'translateX(0)'
        footer.style.transform = 'translateX(0)'
    }, 100)
}

iconMenuMobile.onclick = () => {
    header.style.transform = 'translateX(300px)'
    mainContent.style.transform = 'translateX(300px)'
    footer.style.transform = 'translateX(300px)'

    setTimeout(() => {
        header.style.zIndex = '-1'
        mainContent.style.zIndex = '-1'
        footer.style.zIndex = '-1'
    }, 400)
}

textSupportClient.onclick = () => {
    const supportClientIcon = document.querySelector('.support-client-icon')
    if (menuSupportClient.offsetHeight === 0) {
        const listMenu = menuSupportClient.querySelector('ul')
        menuSupportClient.style.height = `${listMenu.offsetHeight}px`
        supportClientIcon.style.transform = 'rotate(-180deg)'
    } else {
        menuSupportClient.style.height = '0'
        supportClientIcon.style.transform = 'rotate(0deg)'
    }
}

textInfoAbout.onclick = () => {
    const supportClientIcon = document.querySelector('.icon-about-info')
    if (menuAboutInfo.offsetHeight === 0) {
        const listMenu = menuAboutInfo.querySelector('ul')
        menuAboutInfo.style.height = `${listMenu.offsetHeight}px`
        supportClientIcon.style.transform = 'rotate(-180deg)'
    } else {
        menuAboutInfo.style.height = '0'
        supportClientIcon.style.transform = 'rotate(0deg)'
    }
}

document.addEventListener('scroll', () => {
    if (window.innerWidth > 1024) {
        if (window.scrollY > distanceFromTopToMenuHeaderWrapper) {
            header.classList.add('fixed-header')
            headerTop.classList.add('hidden')
            menuHeaderWrapper.classList.add('hidden')
            btnHeaderMenuList.classList.add('!block')
            headerLogo.classList.add('!hidden')
            headerBottomChild.classList.add('lg:h-[80px]')
            menuHeaderWrapper.style.top = '50px'
        } else {
            header.classList.remove('fixed-header')
            headerTop.classList.remove('hidden')
            btnHeaderMenuList.classList.remove('!block')
            headerLogo.classList.remove('!hidden')
            headerBottomChild.classList.remove('lg:h-[80px]')
            menuHeaderWrapper.classList.remove('hidden')
            menuHeaderWrapper.style.top = '100px'
        }
    } else {
        if (window.scrollY > header.offsetHeight) {
            header.classList.add('fixed-header')
            headerTop.classList.add('hidden')
        } else {
            header.classList.remove('fixed-header')
            headerTop.classList.remove('hidden')
        }
    }
})

const listNextMenuIcon = document.querySelectorAll('.next-menu-icon')

listNextMenuIcon.forEach(item => {
    item.onclick = function () {
        const menuParent = item.closest('.menu-parent')
        const menuChild = this.parentElement.querySelector('.menu-child')
        menuChild.classList.remove('menuMobileToRight')
        menuChild.classList.add('menuMobileToLeft')
        menuChild.style.zIndex = '1'
        const iconPrev = menuChild.querySelector('.icon-prev')
        iconPrev.onclick = function () {
            setTimeout(() => {
                menuChild.style.zIndex = '-1'
            }, 700)
            menuChild.classList.remove('menuMobileToLeft')
            menuChild.classList.add('menuMobileToRight')
        }
    }
})

const listCountDown = document.querySelectorAll('.deal-hot-countdown')
listCountDown.forEach(item => {
    countDown(item, '04/14/2024 10:1 AM')
})

function countDown(element, date) {
    var end = new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            element.innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        element.innerHTML = (days < 10 ? `0${days}` : days) + ' Ngày ';
        element.innerHTML += (hours < 10 ? `0${hours}` : hours) + ' : ';
        element.innerHTML += (minutes < 10 ? `0${minutes}` : minutes) + ' : ';
        element.innerHTML += seconds < 10 ? `0${seconds}` : seconds;
    }

    timer = setInterval(showRemaining, 1000);

}

// DEAL HOT
var end = new Date('04/14/2024 10:1 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now; days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.querySelector('.deal-hot-day').innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector('.deal-hot-hour').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.deal-hot-minute').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.deal-hot-second').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

timer = setInterval(showRemaining, 1000);

const groupContentButtons = document.querySelectorAll('.group-content-btn')

groupContentButtons.forEach(item => {
    item.onclick = function () {
        groupContentButtons.forEach(btn => btn.classList.remove('active'))
        const listDealHotSlide = document.querySelectorAll('.deal-hot-slide')
        listDealHotSlide.forEach(dealHotSlide => {
            dealHotSlide.style.display = 'none'
        })
        const slideShow = document.querySelector(`.${this.id}`)
        slideShow.style.display = 'block'
        this.classList.add('active')
        $(`.${this.id}.deal-hot-slide`).slick({
            dots: false,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: document.querySelector('.btn-deal-hot.next'),
            prevArrow: document.querySelector('.btn-deal-hot.prev'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }
})

$(document).ready(function () {
    // SLIDE BANNER
    $('.wrap-slides-banner-home').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        speed: 1000,
    });

    // SLIDE BANNER BOTTOM
    $('.slide-banner-bottom').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    prevArrow: false,
                    nextArrow: false,
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    // DEAL HOT SLIDE
    $('.happenning.deal-hot-slide').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: document.querySelector('.btn-deal-hot.next'),
        prevArrow: document.querySelector('.btn-deal-hot.prev'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // GRAPHICS LAPTOPS SLIDE
    $('.graphics-laptops-slide').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        nextArrow: document.querySelector('.btn-graphics-laptops.next'),
        prevArrow: document.querySelector('.btn-graphics-laptops.prev'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // LAPTOP DEMAND SLIDE
    $('.demand-laptops-slide').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        nextArrow: document.querySelector('.btn-demand-laptops.next'),
        prevArrow: document.querySelector('.btn-demand-laptops.prev'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    // SLIDE THANKS
    $('.slide-thanks').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    prevArrow: false,
                    nextArrow: false,
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });
});

