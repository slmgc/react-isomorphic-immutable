const Nav = require('client/components/nav')


module.exports = class Layout extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		user: React.PropTypes.object.isRequired
	}

	render() {
		const {children, user} = this.props

		return (
			<div>
				<Nav {...user} />
				{children}
			</div>
		)
	}
}