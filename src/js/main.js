import {addBurger} from "./modules/burger.js";
import {previewSlider} from './modules/previewSlider.js';
import {projectSlider} from "./modules/projectSlider.js";
import {blogSlider} from "./modules/blogSlider.js";


previewSlider();
projectSlider();
blogSlider()
addBurger();
window.addEventListener('resize', addBurger);