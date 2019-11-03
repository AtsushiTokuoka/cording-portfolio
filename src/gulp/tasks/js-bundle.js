const path = require('../path-setting');
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require( '../../webpack.config' );

//js bundle
gulp.task('js-bundle', ()=> {
    return webpackStream(webpackConfig, webpack)
    .pipe( gulp.dest( path.javascript.dest ) )
}) 