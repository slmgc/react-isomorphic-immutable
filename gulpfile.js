const gulp = require('gulp');
const stylus = require('gulp-stylus');
const livereload = require('gulp-livereload');


gulp
	.task('watch:css', () => {
		livereload.listen();
		gulp.watch('assets/**/*.styl', ['build:css']);
	})

	.task('build:css', () => {
		console.log('build');
		gulp.src('assets/bundle.styl')
			.pipe(stylus())
			.pipe(gulp.dest('public'))
			.pipe(livereload())
	});