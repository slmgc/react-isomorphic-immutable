var {React, Router, Reflux} = require('_libs');
var {PureRenderMixin} = React.addons;
var {Link} = Router;


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		return (
			<nav className="nav">
				<ul>
					<li><Link to="home">Home</Link></li>
					<li><Link to="about">About</Link></li>
				</ul>
			</nav>
		);
	}
});