// burger
document.querySelector('.header__burger').onclick = () => {
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
}

// инициализация и настройки для specialties__slider
$(document).ready(function () {
    $(".slider__body").slick({
        slidesToShow: 3,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
// =============================================


// products табы 
let productItem = document.querySelectorAll('.products__item')
document.querySelector('.products__list').onclick = tabs

function tabs(event) {
    for (let i = 0; i < productItem.length; i++) {
        productItem[i].classList.remove('active')
    }

    let dataTab = event.target.dataset.tab
    let slides = document.querySelectorAll('.slider__body')

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains(dataTab)) {
            slides[i].classList.remove('hiden')
            $(".slider__body").slick("setPosition");
            $(".slider__body").slick("goTo", 1);
        } else {
            slides[i].classList.add('hiden')
            event.target.classList.remove('active')
        }
    }
    event.target.classList.add('active')
}

// --------------------------------------------


