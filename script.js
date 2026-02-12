document.addEventListener('DOMContentLoaded', () => {

    function dropDownMenu() {

        const burgerMenu = document.querySelector('.burger__icon');

        burgerMenu.addEventListener('click', (event) => {
            event.target.closest(':not(span)').classList.toggle('open');
            document.querySelector('.mobile__menu').classList.toggle('mobile__menu--active');
            document.querySelector('section').classList.toggle('shadow');
        });

    }

    function swiperInizialize() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            effect: 'fade',
            direction: 'horizontal',
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 400,
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });


        const swiper2 = new Swiper('.swiper-2', {
            // Optional parameters
            effect: 'fade',
            direction: 'horizontal',
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 400,
            loop: true,

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }


    function showImgShadow() {
        const nextButton = document.querySelector('.swiper-button-next'),
              prevButton = document.querySelector('.swiper-button-prev');

        function switchBackgroundImg() {
            const pictures = document.querySelectorAll('[data-img="1"]'),
                  imgClone = document.querySelector('.img__clone');

            let pictureUrl;

            pictures.forEach(item => {
                if (item.classList.contains('swiper-slide-active')) {
                    pictureUrl = item.getAttribute('src');
                }
            });

            console.log(pictureUrl);

            imgClone.style.cssText = `background: transparent url("${pictureUrl}") no-repeat center/cover;`;

        }

        nextButton.addEventListener('click', (e) => {
            switchBackgroundImg();
        });

        prevButton.addEventListener('click', (e) => {
            switchBackgroundImg();
        });
    }


    dropDownMenu();
    swiperInizialize();
    showImgShadow()

});

