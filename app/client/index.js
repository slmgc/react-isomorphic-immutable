const React = require('react');
const Baobab = require('baobab');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const routes = require('app/client/routes');
const {Root} = require('baobab-react/wrappers');
const createBrowserHistory = require('history/lib/createBrowserHistory');


ReactDOM.render(
	<Root tree={new Baobab(window.__INIT_STATE__)}>
		<Router history={createBrowserHistory()}>{routes}</Router>
	</Root>,
	document
);