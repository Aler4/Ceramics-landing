import Swiper, { Navigation, Pagination } from 'swiper';
export const projectSlider = () => {
    const sliderThumbs = new Swiper('.thumbs', {
        modules: [Navigation],
        direction: 'horizontal',
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let slider = new Swiper('.projects__slider', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: sliderThumbs,
        },
    });
};
