var {React, Router, Reflux} = require('_libs');
var {PureRenderMixin} = React.addons;
var {Link} = Router;
var Nav = require('./Nav');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		return (
			<div className="layout">
				<Nav />
				{this.props.children}
			</div>
		);
	}
});