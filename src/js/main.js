import {addBurger} from "./modules/burger.js";
import {previewSlider} from './modules/previewSlider.js';
import {projectSlider} from "./modules/projectSlider.js";
import {magnify} from "./modules/zoom.js";

let slider = previewSlider();
projectSlider();

addBurger();
window.addEventListener('resize', addBurger);