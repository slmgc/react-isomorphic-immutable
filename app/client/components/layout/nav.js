const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const {Link} = require('react-router');


@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
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
}