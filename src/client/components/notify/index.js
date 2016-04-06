module.exports = class Nav extends React.Component {
	static propTypes = {
		error: React.PropTypes.object
	}

	render() {
		const {error} = this.props

		return (
			error.status
				? <div className="alert alert-danger"
					role="alert">{error.message}</div>

				: null
		)
	}
}