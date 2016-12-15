var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('www/SCSS/*.scss', ['sass']); 
  gulp.watch('www/*.html', browserSync.reload); 
})

gulp.task('sass', function(){
  return gulp.src('www/SCSS/site.scss')
    .pipe(sass())
    .pipe(gulp.dest('www/CSS'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'www'
    },
  })
})

gulp.task('default', ['watch']);