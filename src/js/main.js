import {addBurger} from "./modules/burger.js";
import {previewSlider} from './modules/previewSlider.js';
import {projectSlider} from "./modules/projectSlider.js";
import {magnify} from "./modules/zoom.js";

let slider = previewSlider();
projectSlider();
let slides = document.querySelectorAll(".slide__img")
slides.forEach(el => {
    el.addEventListener('click', e => {
        let selector = e.target.getAttribute('class')
        magnify(`.${selector}`,3);
    });
})

addBurger();
window.addEventListener('resize', addBurger);