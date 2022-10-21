import Swiper from 'swiper';
export const blogSlider = () => {
    return new Swiper('.blog__cards', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4.2,
        spaceBetween: 30,
    });
};
