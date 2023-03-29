
    let advantages_block_slider = new Swiper('.advantages_block .swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            dynamicBullets: true,
            dynamicMainBullets: 3,
        },
        autoHeight: false,
    
        autoplay: {
            delay: 3500,
        },
    
        navigation: {
            nextEl: document.querySelector('.advantages_block .swiper-button-next'),
            prevEl: document.querySelector('.advantages_block .swiper-button-prev'),
            enabled: false
        },
    
        // slidesPerGroup: 2,
        // slidesPerView: 2,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        slidesPerGroupAuto: true,
        spaceBetween: 10,
    
        breakpoints: {
            786: {
                spaceBetween: 20,
            },
            1288: {
                navigation: {
                    enabled: true
                },
                spaceBetween: 20,
                // slidesPerGroup: 4,
                // slidesPerView: 4,
            }
        }
    });


    const items = document.querySelectorAll('.advantages-item')
    
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.addEventListener('mouseover', function (e) {
            const activeItem = document.querySelector('.advantages-item.active-adv')
            if(!this.classList.contains('active-adv')){
                activeItem.classList.remove('active-adv')
                this.classList.add('active-adv')
            }   
        })
    }