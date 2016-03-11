module.exports = class Nav extends React.Component {
	static propTypes = {
		id: React.PropTypes.number,
		name: React.PropTypes.string
	}

	render() {
		const {id, name} = this.props

		return (
			<div>{id && name}</div>
		)
	}
}