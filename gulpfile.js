
import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
};

import { fonts } from "./gulp/tasks/fonts.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';



function watcher () {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
};

const mainTasks = gulp.parallel(fonts, scss, js, images, html,);
const dev = gulp.series(reset,mainTasks, gulp.parallel(watcher, server))
gulp.task('server',server);
gulp.task('default', dev);