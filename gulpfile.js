var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('www/SCSS/site.scss', ['sass']); 
  gulp.watch('www/SCSS/_config.scss', ['sass']); 
  gulp.watch('www/SCSS/_mixins.scss', ['sass']); 
  gulp.watch('www/SCSS/_reset.scss', ['sass']); 
  gulp.watch('www/*.html', browserSync.reload); 
  // Other watchers
})

gulp.task('sass', function(){
  return gulp.src('www/SCSS/site.scss')
    .pipe(sass()) // Using gulp-sass
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
});