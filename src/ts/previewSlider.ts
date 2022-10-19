import Swiper, {Navigation, Pagination,} from 'swiper';

export const previewSlider = () => {
	return new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		direction: 'horizontal',
  		loop: true,
  		slidesPerView: 1,
  		spaceBetween: 1,
		lazy: true,
		cssMode: true,
		mousewheel: {
			releaseOnEdges: true,
			sensitivity: 5.5,
		},

		pagination: {
    		el: '.swiper-pagination',
			clickable: true,
		},

  		navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
  		},
	})
}