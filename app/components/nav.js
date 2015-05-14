var {React, Router, Reflux} = require('_libs');
var {PureRenderMixin} = React.addons;
var {RouteHandler} = Router;
var sessionActions = require('../actions').session;
var sessionStore = require('../stores').session;


module.exports = React.createClass({
	mixins: [PureRenderMixin, Reflux.connect(sessionStore, 'session')],
	onLogin: function(e){
		e.preventDefault();
		sessionActions.login();
	},
	onLogout: function(e){
		e.preventDefault();
		sessionActions.logout();
	},
	render: function(){
		var isAuth = this.state.session.get('isAuth');

		return (
			<nav className="nav">
				<div className="nav-inner">
					{isAuth ?
						<a href="#" onClick={this.onLogout}>Logout</a>
						:
						<a href="#" onClick={this.onLogin}>Login</a>
					}
				</div>
			</nav>
		);
	}
});