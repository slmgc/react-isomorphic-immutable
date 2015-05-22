var {React, Router} = require('_libs');
var {Route, Redirect, DefaultRoute} = Router;


var Routes = (
	<Route>
		<Route handler={require('./Page')}>
			<Route name="about" handler={require('../views/About')} />
			<DefaultRoute name="home" handler={require('../views/Home')} />
		</Route>

		// HACK: default 404 route
		<Redirect from="*" to="home" />
	</Route>
);

module.exports = Routes;