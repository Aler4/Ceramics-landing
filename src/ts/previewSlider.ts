import Swiper, {Navigation, Pagination} from 'swiper';

export const previewSlider = () => {
	const slider = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		direction: 'horizontal',
  		loop: true,
  		slidesPerView: 1,
  		spaceBetween: 0,


  		pagination: {
    		el: '.swiper-pagination',
  		},

  		navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
  		},

	})
}