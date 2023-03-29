document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.clientWidth > 600){
        document.querySelectorAll('.slider_wrap').forEach(slider_wrap => {
            new Swiper(slider_wrap.querySelector('.catalog-slider'), {
                slidesPerView: 2,
                spaceBetween: 10,
                /* loop: true, */
                autoPlay: {
                    delay: 7000,
                },
    
                pagination: {
                    el: slider_wrap.querySelector('.swiper-pagination'),
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                },
                
                breakpoints:{
                    600: {
                        slidesPerView: 3
                    }, 
                    991: {
                        slidesPerView: 6
                    }, 
                },

                autoHeight: true,
    
                navigation: {
                    nextEl: slider_wrap.querySelector('.swiper-button-next'),
                    prevEl: slider_wrap.querySelector('.swiper-button-prev'),
                    enabled: false
                },
            });
        });
    }
});