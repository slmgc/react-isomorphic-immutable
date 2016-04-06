const Nav = require('client/components/nav')
const Notify = require('client/components/notify')


module.exports = class Layout extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		error: React.PropTypes.object,
		user: React.PropTypes.object.isRequired
	}

	render() {
		const {children, error, user} = this.props

		return (
			<div>
				<Nav {...user} />
				<div className="container">
					<Notify error={error} />
					{children}
				</div>
			</div>
		)
	}
}