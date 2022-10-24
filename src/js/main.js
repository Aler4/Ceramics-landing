import {addBurger} from "./modules/burger.js";
import {previewSlider} from './modules/previewSlider.js';
import {projectSlider} from "./modules/projectSlider.js";
import {blogSlider} from "./modules/blogSlider.js";
import {cursor} from "./modules/zoom.js";


let zoomSliders = document.querySelectorAll('.swiper-zoom-container');

zoomSliders.forEach(el => {
    cursor(`#${el.getAttribute('id')}`, "zoom");

})
previewSlider();
projectSlider();
blogSlider()
addBurger();
window.addEventListener('resize', addBurger);