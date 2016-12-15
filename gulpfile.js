var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('www/SCSS/*.scss', ['sass']); 
  gulp.watch('www/*.html', browserSync.reload); 
  gulp.watch('www/JS/**/*.js', browserSync.reload);
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

gulp.task('useref', function(){
  return gulp.src('www/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('default', ['watch'])

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref'],
    callback
  )
});