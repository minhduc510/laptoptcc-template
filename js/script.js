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
    $('.deal-hot-slide').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: document.querySelector('.btn-deal-hot.next'),
        prevArrow: document.querySelector('.btn-deal-hot.prev'),
        autoplay: true,
        autoplaySpeed: 2000,
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
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    nextArrow: document.querySelector('.btn-graphics-laptops.next'),
                    prevArrow: document.querySelector('.btn-graphics-laptops.prev'),
                }
            },
        ]
    });

    // LAPTOP DEMAND SLIDE
    $('.laptop-demand-slide').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        nextArrow: document.querySelector('.btn-laptop-demand.next'),
        prevArrow: document.querySelector('.btn-laptop-demand.prev'),
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    speed: 1000,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    nextArrow: document.querySelector('.btn-laptop-demand.next'),
                    prevArrow: document.querySelector('.btn-laptop-demand.prev'),
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

