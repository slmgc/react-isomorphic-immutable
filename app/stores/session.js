var {Reflux, Immutable} = require('_libs');
var sessionActions = require('../actions').session;


module.exports = Reflux.createStore({
	listenables: sessionActions,
	getInitialState: function() {
		this.reset();
		return this.state;
	},
	reset: function(){
		this.state = Immutable.fromJS({});
	},
	emit: function(state){
		this.queueState = state;
		requestAnimationFrame(() => {
			if (this.queueState){
				this.trigger(this.queueState);
				this.queueState = null;
			}
		});
	},
	onLogin: function(){
		this.emit(this.state.set('isAuth', true));
	},
	onLogout: function(){
		this.emit(this.state.set('isAuth', false));
	}
});