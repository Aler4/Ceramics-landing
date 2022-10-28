import "../swiper-bundle.js";
import {Navigation, Pagination} from "swiper";

export const previewSlider = () => {
    return new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        mousewheel: {
            releaseOnEdges: true,
            sensitivity: 1,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
