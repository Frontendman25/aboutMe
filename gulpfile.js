var gulp = require('gulp'),
		minCss = require('gulp-clean-css'),
		scss = require('gulp-scss');

gulp.task('min', function(){
	gulp.src('css/*.css')
		.pipe(minCss())
		.pipe(gulp.dest('demo/css'))
});

gulp.task('scss', function(){
	gulp.src('scss/style.scss')
		.pipe(scss())
		.pipe(minCss())
		.pipe(gulp.dest('demo/css'));
});