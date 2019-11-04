const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp', { recurse: true }); // 各gulpタスクをimport

// 初回起動時にcss・jsをpublic/assetsに生成
gulp.task('initialize', gulp.series('scss-compile', 'js-bundle'));

gulp.task('default', gulp.parallel('initialize', 'browser-sync', 'watch'));
