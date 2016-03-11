const {branch} = require('baobab-react/higher-order')
const Layout = require('client/components/layout')


module.exports = branch(class LayoutController extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		user: React.PropTypes.object.isRequired
	}

	render() {
		return (
			<Layout {...this.props} />
		)
	}
}, {cursors: {
	user: ['user']
}})