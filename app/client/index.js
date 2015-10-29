const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const routes = require('app/client/routes');
const Context = require('app/client/components/context');
const createBrowserHistory = require('history/lib/createBrowserHistory');


ReactDOM.render(
	<Context>
		<Router history={createBrowserHistory()}>{routes}</Router>
	</Context>,
	document
);