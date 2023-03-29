document.addEventListener('DOMContentLoaded', () => {
    let sections_slider_block_slider = new Swiper('.sections_slider_block .swiper', {
        spaceBetween: 10,
        slidesPerView: 6,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            dynamicBullets: true,
            dynamicMainBullets: 3,
        },

        autoHeight: false,

        navigation: {
            nextEl: document.querySelector('.sections_slider_block .swiper-button-next'),
            prevEl: document.querySelector('.sections_slider_block .swiper-button-prev'),
            enabled: false
        },

        slidesPerView: 'auto',
        slidesPerGroupAuto: true,
        spaceBetween: 10,
        
        breakpoints: {
            1100: {
                slidesPerView: 6,
            },
        }
    });
});