require('app/server/patch');
const express = require('express');
const config = require('app/server/config');
const app = express();
const env = app.get('env');
const port = process.env.SERVER_PORT || config.SERVER_PORT;


if (env === 'development') {
	app.use(require('connect-livereload')());
}

app
	.use(express.static('public', {maxAge: '1y'}))
	.use(require('app/server/api'))
	.use(require('app/server/prefetch'))
	.use(require('app/server/render'))
	.listen(port, () => {
		console.log(`${env} server started at port ${port}`);
	});