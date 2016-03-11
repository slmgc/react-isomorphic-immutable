const fs = require('fs')
const path = require('path')
const gulp = require('gulp')


function createSymlink(src, dest) {
	try {
		fs.symlinkSync(path.join(__dirname, src), dest, 'dir')
	} catch (e) {}
}

module.exports = gulp
	.task('symlinks', () => {
		createSymlink('src/server', 'node_modules/server')
		createSymlink('src/client', 'node_modules/client')
		createSymlink('test', 'node_modules/test')
	})