module.exports = class Nav extends React.Component {
	static propTypes = {
		error: React.PropTypes.object
	}

	render() {
		const {error} = this.props

		return (
			<div>{error.message}</div>
		)
	}
}