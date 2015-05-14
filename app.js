require('node-jsx').install({harmony: true});
var serverSideRendering = require('./app/server');
var slashes = require('connect-slashes');
var express = require('express');
var app = express();
var env = app.get('env');
var port = process.env.PORT || 8080;


app
	.use(express.static('public', {maxAge: '365 days'}))
	.use(slashes(false))
	.use(serverSideRendering)
	.listen(port, function(){
		console.log('%s server started at port %d', env, port);
	});
