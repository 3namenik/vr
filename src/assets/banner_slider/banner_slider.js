document.addEventListener('DOMContentLoaded', () => {
    let banner_slider_slider = new Swiper('.banner_slider .swiper', {
        loop: true,
        
        autoplay:{
            delay: 4000
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
        },
        autoHeight: true,

        navigation: {
            nextEl: document.querySelector('.banner_slider .swiper-button-next'),
            prevEl: document.querySelector('.banner_slider .swiper-button-prev'),
            enabled: false
        },

        breakpoints: {
            1288: {
                navigation: {
                    enabled: true
                }
            }
        }
    });
});