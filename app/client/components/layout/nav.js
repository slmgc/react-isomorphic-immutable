const React = require('react');
const {mixins} = require('core-decorators');
const {branch} = require('baobab-react/decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const {Link} = require('react-router');


@branch({cursors: {
	user: ['user']
}})
@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
		const {user} = this.props;

		return (
			<nav className="nav clear">
				<Link className="nav-link"
					activeClassName="active"
					onlyActiveOnIndex
					to="/">Home</Link>

				<Link className="nav-link"
					activeClassName="active"
					to="/about">About</Link>

				{user &&
					<div className="nav-text float-right">{user.username}</div>
				}
			</nav>
		);
	}
}