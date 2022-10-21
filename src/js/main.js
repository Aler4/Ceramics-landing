import {addBurger} from "./modules/burger.js";
import {previewSlider} from './modules/previewSlider.js';
import {projectSlider} from "./modules/projectSlider.js";


previewSlider();
projectSlider();

addBurger();
window.addEventListener('resize', addBurger);