document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.detail__img-big-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        /* pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }, */
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: new Swiper('.detail__img-min-slider', {
                slidesPerView: 'auto',
                spaceBetween: 10,
                direction: 'vertical',
                /* navigation: {
                    nextEl: '.catalog-element__slider-min-down',
                    prevEl: '.catalog-element__slider-min-up',
                }, */
            }),
        },
    })

    new Quantity(document.querySelector('.select-quantity'));
});

/** 
 * 
 * Quantity
 * 
*/

class Quantity{
    constructor(dom_el){
        this.dom_el = dom_el;
        this.input_obj = dom_el.querySelector('.select-quantity__val');
        this.value = Number(this.input_obj.value);
        this.id = Number(this.input_obj.dataset.quantityId);
        this.step = Number(this.input_obj.step);
        this.min = Number(this.input_obj.min);

        this.button_up = this.dom_el.querySelector('.select-quantity__btn_up');
        this.button_up.addEventListener('click', (evt) => {
            this.add();
        });

        this.button_down = this.dom_el.querySelector('.select-quantity__btn_down')
        this.button_down.addEventListener('click', (evt) => {
            this.reduce();
        });
    }

    /* Обновление */
    update(quantity){
        this.value = quantity;
        this._redraw();
    }

    add(){
        this.value = this.value + this.step;
        this._redraw();
        return true;
    }

    reduce(){
        if (this._check_min()){
            this.value = this.value - this.step;
            this._redraw();
        } else {
            return false;
        }
    }

    _redraw(){
        document.querySelectorAll('[data-quantity-id]').forEach(item => {
            if (item.dataset.quantityId == this.id){

                if (this._check_min){
                    this.dom_el.querySelector('.select-quantity__btn_down').disabled = false;
                } else {
                    this.dom_el.querySelector('.select-quantity__btn_down').disabled = true;
                }

                this.input_obj.value = this.value;
            }
        });

        this.dom_el.dispatchEvent(new Event('change', {bubbles: true}));
    }

    /* Проверяем минимальное количество */
    _check_min(){
        if (this.value - this.step >= this.min) {
            return true;
        } else {
            return false;
        }
    }
}

