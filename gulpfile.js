var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', function() {
  return gutil.log('Gulp is running');
});

gulp.task('copyFile', function() {
  gulp.src('public/source/javascripts/courage.js').pipe(gulp.dest('public'));  
});
