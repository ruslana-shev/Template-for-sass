var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('dist/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 9']))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['sass'], function(){
	gulp.watch('dist/sass/**/*.scss', ['sass']);
})