const {branch} = require('baobab-react/higher-order')
const Layout = require('client/components/layout')


module.exports = branch(class LayoutController extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		error: React.PropTypes.object,
		user: React.PropTypes.object.isRequired
	}

	render() {
		return (
			<Layout {...this.props} />
		)
	}
}, {cursors: {
	error: ['error'],
	user: ['user']
}})