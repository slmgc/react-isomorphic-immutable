const {Link} = ReactRouter


module.exports = class Nav extends React.Component {
	static propTypes = {
		id: React.PropTypes.number,
		name: React.PropTypes.string
	}

	render() {
		const {id, name} = this.props

		return (
			<nav className="navbar navbar-full navbar-light bg-faded">
				<div className="container">
					<div className="nav navbar-nav">
						<Link className="nav-item nav-link"
							activeClassName="active"
							onlyActiveOnIndex
							to="/">Home</Link>

						<div className="pull-xs-right">
							<button className="btn btn-success">Sign In</button>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}