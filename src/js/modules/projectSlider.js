import Swiper, { Navigation, Pagination } from 'swiper';
export const projectSlider = () => {
    const sliderThumbs = new Swiper('.projects-slider__thumbs', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 40,
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    return new Swiper('.projects__slider', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 1,
        cssMode: true,
        lazy: true,
        zoom: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: sliderThumbs,
            thumbsContainerClass: ".projects-slider__thumbs",
        },
    });
};
