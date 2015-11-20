const {React, ReactRouter} = require('app/client/vendor');
const {IndexRoute, Route, Redirect} = ReactRouter;


export default (
	<Route path="/" component={require('app/client/components/page')}>
		<IndexRoute component={require('app/client/views/home')} />
		<Route path="about" component={require('app/client/views/about')} />
		<Redirect from="*" to="/" />
	</Route>
);