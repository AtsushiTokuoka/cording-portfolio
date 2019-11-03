const path = require('../path-setting');
const gulp = require('gulp');

gulp.task('watch', ()=> {
    //scss
    gulp.watch( path.stylesheet.watch, gulp.series( 'scss-compile', 'browser-reload') );
    //js
    gulp.watch( path.javascript.watch, gulp.series( 'js-bundle', 'browser-reload') );
    //html
    gulp.watch( path.html, gulp.task('browser-reload') );
});