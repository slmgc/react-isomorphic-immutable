const {Link} = ReactRouter


module.exports = class Nav extends React.Component {
	static propTypes = {
		id: React.PropTypes.number,
		name: React.PropTypes.string
	}

	render() {
		const {id, name} = this.props

		return (
			<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
				<div className="container">
					<div className="nav navbar-nav pull-xs-left">
						<Link className="nav-item nav-link"
							activeClassName="active"
							onlyActiveOnIndex
							to="/">Home</Link>
					</div>

					<div className="nav navbar-nav pull-xs-right">
						<button className="btn btn-success">Sign In</button>
					</div>
				</div>
			</nav>
		)
	}
}