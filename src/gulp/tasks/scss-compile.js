const path = require('../path-setting');
const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('scss-compile', ()=> {
    return gulp
    .src( path.stylesheet.entry ) //コンパイル対象を指定
    .pipe( sourcemaps.init() ) //sourcemapの初期化
    .pipe( plumber({ errorHandler: notify.onError('Error: <%= error.message %>')} )) //エラー通知
    .pipe( sass( { outputStyle: 'compressed' } ).on('error', sass.logError) ) //コンパイル
    .pipe( postcss([ autoprefixer({ cascade: false }) ]) ) //プレフィクスを自動付与 整形を無効
    .pipe( sourcemaps.write() ) //sourcemap生成
    .pipe( gulp.dest( path.stylesheet.dest ) ) //コンパイル後、出力
});