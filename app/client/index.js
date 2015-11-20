const {React, ReactDOM, ReactRouter, Baobab, Root, createBrowserHistory} = require('app/client/vendor');
const routes = require('app/client/routes');
const {Router} = ReactRouter;


ReactDOM.render(
	<Root tree={new Baobab(window.__INIT_STATE__)}>
		<Router history={createBrowserHistory()}>{routes}</Router>
	</Root>,
	document
);