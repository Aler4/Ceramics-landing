import Swiper, {Navigation, Pagination,} from 'swiper';

export const previewSlider = () => {
	return new Swiper('.swiper', {
		modules: [Navigation, Pagination],

		direction: 'horizontal',
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: true,
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
