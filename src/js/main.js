import {addBurger} from "./modules/burger.js";
import {previewSlider} from './modules/previewSlider.js';

previewSlider();
addBurger();
window.addEventListener('resize', addBurger);
console.log('asd')