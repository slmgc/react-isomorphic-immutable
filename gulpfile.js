'use strict';
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const minifyCss = require('gulp-minify-css');
const livereload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


gulp
	.task('watch:css', ['build:css'], () => {
		livereload.listen();
		gulp.watch('assets/**/*.styl', ['build:css']);
	})

	.task('build:css', () =>
		gulp
			.src('assets/bundle.styl')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(stylus())
			.pipe(autoprefixer())
			.pipe(minifyCss())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('public'))
			.pipe(livereload())
	)

	.task('populate:db', () => {
		const fs = require('fs');
		const loki = require('lokijs');
		const uuid = require('node-uuid');
		const bcrypt = require('bcryptjs');

		try {
			fs.mkdirSync('db');
		} catch (e) {
			return;
		}

		const db = new loki('db/dev.db');
		const users = db.addCollection('users');

		users.insert({
			id: uuid.v4(),
			username: 'John Doe',
			email: 'john.doe@example.com',
			password: bcrypt.hashSync('123', 10)
		});

		db.saveDatabase();
	});