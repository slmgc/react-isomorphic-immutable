const {branch} = require('baobab-react/higher-order')
const Layout = require('client/components/layout')


module.exports = branch({
	error: ['error'],
	user: ['user']
}, class LayoutController extends React.Component {
	static propTypes = {
		error: React.PropTypes.object,
		user: React.PropTypes.object.isRequired
	}

	render() {
		return (
			<Layout {...this.props} />
		)
	}
})