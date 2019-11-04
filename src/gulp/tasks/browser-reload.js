const path = require('../path-setting');
const gulp = require('gulp');
const browserSync = require('browser-sync');

//auto reload
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: path.syncDir,
      index: 'index.html'
    }
  });
});
gulp.task('browser-reload', done => {
  browserSync.reload();
  done();
});
