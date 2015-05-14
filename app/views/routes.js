var {React, Router} = require('_libs');
var {Route, Redirect, DefaultRoute} = Router;


module.exports = (
	<Route>
		<Route>
			<DefaultRoute name="index" handler={require('./index')} />
		</Route>

		// HACK: default 404 route
		<Redirect from="*" to="index" />
	</Route>
);