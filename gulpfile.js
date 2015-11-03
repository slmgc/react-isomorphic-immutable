'use strict';
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');


gulp
	.task('watch:css', ['build:css'], () => {
		livereload.listen();
		gulp.watch('assets/**/*.styl', ['build:css']);
	})

	.task('build:css', () =>
		gulp.src('assets/bundle.styl')
			.pipe(plumber())
			.pipe(stylus())
			.pipe(gulp.dest('public'))
			.pipe(livereload())
	);