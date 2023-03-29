document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 10,    
        loop: true,
        autoPlay: {
            delay: 4500,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            /* dynamicBullets: true, */
            dynamicMainBullets: 3,
        },
        
        breakpoints:{
            400: {
                slidesPerView: 2,
            },

            630: {
                slidesPerView: 3,
                spaceBetween: 20,
            }, 
            1050: {
                slidesPerView: 2,
                spaceBetween: 40,
            }, 
        },

        autoHeight: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            enabled: false
        },
    });
});