const React = require('react');
const ReactRouter = require('react-router');
const {IndexRoute, Route, Redirect} = ReactRouter;


export default (
	<Route path="/" component={require('app/client/components/page')}>
		<IndexRoute component={require('app/client/views/home')} />
		<Route path="about" component={require('app/client/views/about')} />
		<Redirect from="*" to="/" />
	</Route>
);