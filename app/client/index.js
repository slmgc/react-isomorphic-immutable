const {React, ReactDOM, ReactRouter, Root} = require('app/client/vendor');
const tree = require('app/client/state');
const routes = require('app/client/routes');
const history = require('app/client/history');
const {Router} = ReactRouter;


ReactDOM.render(
	<Root tree={tree}>
		<Router history={history}>{routes}</Router>
	</Root>,
	document
);