const {React, ReactRouter, PureRenderMixin, mixins, branch} = require('app/client/vendor');
const {Link} = ReactRouter;


@branch({cursors: {
	user: ['user']
}})
@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
		const {user} = this.props;
		console.info('Nav:render');

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