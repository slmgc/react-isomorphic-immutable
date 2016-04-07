const {Redirect, Route} = ReactRouter


module.exports = (
	<Route component={require('client/controllers/page')}>
		<Route path="/" component={require('client/routes/home')} />
		<Route path="*" component={require('client/routes/404')}/>
	</Route>
)