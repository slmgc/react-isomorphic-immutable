const {PropTypes} = require('client/common/types')


module.exports = class ActionsController extends React.Component {
	static childContextTypes = {
		actions: PropTypes.actions.isRequired
	}

	static propTypes = {
		actions: PropTypes.actions.isRequired,
		children: React.PropTypes.element
	}

	getChildContext() {
		return {
			actions: this.props.actions
		}
	}

	render() {
		return this.props.children
	}
}