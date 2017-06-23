var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['scss'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['scss/**.scss', 'scss/**/*.scss'], ['scss']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('scss', function() {
  return gulp.src('scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
