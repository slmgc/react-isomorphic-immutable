const React = require('react');
const ReactDOM = require('react-dom');
const {Router} = require('react-router');
const createBrowserHistory = require('history/lib/createBrowserHistory');
const routes = require('app/client/routes');


ReactDOM.render(
	<Router history={createBrowserHistory()}>{routes}</Router>,
	document
);