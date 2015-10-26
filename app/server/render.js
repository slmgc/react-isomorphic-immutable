const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const routes = require('app/client/routes');
const {RoutingContext} = ReactRouter;


module.exports = require('express')()
	.get('*', (req, res, next) => {
		ReactRouter.match({
			routes,
			location: req.url
		}, (e, location, props) => {
			if (props) {
				res.send(ReactDOMServer.renderToString(
					<RoutingContext {...props} />
				));
			} else if (location) {
				res.redirect(301, location.pathname + location.search);
			} else if (e) {
				res.sendStatus(500);
			} else {
				res.sendStatus(404);
			}
		});
	});