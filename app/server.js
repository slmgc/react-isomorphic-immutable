require('_libs/monkey');
var {React, Router} = require('_libs');
var routes = require('./views/routes');
var app = require('express')();


app.use((req, res, next) => {
	var router = Router.create({
		routes: routes,
		location: req.url,

		// FIX: making react-router play nice with redirects
		onAbort: (abortReason) => {
			if (abortReason.constructor.name === 'Redirect'){
				var {to, params, query} = abortReason;
				res.redirect(301, router.makePath(to, params, query));
			} else {
				next(abortReason);
			}
		}
	});

	router.run((Handler) => res.send('<!doctype html>' +
		React.renderToString(<Handler />)));
});


module.exports = app;