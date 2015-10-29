const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const {RoutingContext} = ReactRouter;
const routes = require('app/client/routes');
const Context = require('app/client/components/context');


export default require('express')()
	.get('*', (req, res, next) => {
		ReactRouter.match({
			routes,
			location: req.url
		}, (e, location, props) => {
			if (props) {
				res.send('<!doctype html>' + ReactDOMServer.renderToString(
					<Context initState={res.locals.initState}>
						<RoutingContext {...props} />
					</Context>
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