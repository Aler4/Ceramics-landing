import { Navigation, Pagination } from 'swiper';
export const projectSlider = () => {
    const sliderThumbs = new Swiper('.thumbs', {
        modules: [Navigation],
        direction: 'horizontal',
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    let slider = new Swiper('.projects__slider', {
        modules: [Navigation, Pagination],
        loop: true,
        zoom: true,
        cssMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: sliderThumbs,
        },
    });
};
