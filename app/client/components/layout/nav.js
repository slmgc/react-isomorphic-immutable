const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const {Link} = require('react-router');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		return (
			<nav className="nav">
				<Link className="nav-link"
					activeClassName="active"
					onlyActiveOnIndex
					to="/">Home</Link>

				<Link className="nav-link"
					activeClassName="active"
					to="/about">About</Link>
			</nav>
		);
	}
});