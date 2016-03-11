const {Redirect, Route} = require('react-router')


module.exports = (
	<Route component={require('client/controllers/page')}>
		<Route path="/" component={require('client/routes/home')} />
		<Redirect from="*" to="/" />
	</Route>
)