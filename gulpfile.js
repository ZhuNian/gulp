var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
  return gutil.log('Gulp is running');
});

gulp.task('copyFile', function() {
  gulp.src('public/source/javascripts/courage.js').pipe(gulp.dest('public'));  
});

gulp.task('jshint', function() {
  gulp.src('public/source/javascripts/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});