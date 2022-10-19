import Swiper, { Navigation } from 'swiper';
export const projectSlider = () => {
    return new Swiper('.projects__slider', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 1,
        lazy: true,
        cssMode: true,
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 5.6,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
