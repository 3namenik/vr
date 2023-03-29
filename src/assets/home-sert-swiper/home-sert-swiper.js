document.addEventListener('DOMContentLoaded', () => {
    function closest(el, selector) {
        if (Element.prototype.closest) {
        return el.closest(selector);
        }

        let parent = el;

        while (parent) {
        if (parent.matches(selector)) {
            return parent;
        }

        parent = parent.parentElement;
        }

        return null;
    }

    new Swiper('.home-sert-swiper', {
        slidesPerView: 2,
        loop: true,
        effect: 'creative',
        creativeEffect: {
            limitProgress: 2,
            prev: {
                // will set `translateZ(-400px)` on previous slides
                /* translate: [0, 0, '-400px'], */
                translate: [0, 0, 0],
            },
            next: {
                // will set `translateX(100%)` on next slides
                /* translate: ['100%', 0, 0], */
                translate: ['52%' , 0, 0],
                scale: 0.95
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            init: function (){
                document.querySelector('.home-sert-swiper').addEventListener('click', evt => {
                    if (evt.target.src && closest(evt.target, '.swiper-slide-active')){
                        
                        new Fancybox([
                            {
                                src: evt.target.src,
                            },
                        ]);
                    }
                });
            },

            /* click: function (e) {
                if (e.clickedSlide.classList.contains('swiper-slide-active')){
                    console.log(e.clickedSlide.querySelector('img').src);
                    new Fancybox([
                        {
                            src: e.clickedSlide.querySelector('img').src,
                        },
                    ]);
                }
            }, */
        },
    });
})