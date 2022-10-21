import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json')
export const buildJs = () => {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(app.gulp.dest(app.path.src.modules))
        .pipe(app.plugins.browsersync.stream());
}
