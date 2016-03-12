const fs = require('fs')
const gulp = require('gulp')
const path = require('path')


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