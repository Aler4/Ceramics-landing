import Swiper from 'swiper';
export const blogSlider = () => {
    return new Swiper('.blog__cards', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1840: {
                spaceBetween: 30,
                slidesPerView: 4.2,

            },
        },
    });

};
