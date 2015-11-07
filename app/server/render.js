const React = require('react');
const Baobab = require('baobab');
const ReactRouter = require('react-router');
const {Root} = require('baobab-react/wrappers');
const ReactDOMServer = require('react-dom/server');
const {RoutingContext} = ReactRouter;
const routes = require('app/client/routes');


export default require('express')()
	.get('*', (req, res, next) => {
		ReactRouter.match({
			routes,
			location: req.url
		}, (e, location, props) => {
			if (props) {
				res.send('<!doctype html>' + ReactDOMServer.renderToString(
					<Root tree={new Baobab(res.locals.initState)}>
						<RoutingContext {...props} />
					</Root>
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