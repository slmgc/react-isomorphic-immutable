const {branch} = require('baobab-react/higher-order')
const {ContextTypes} = require('client/common/types')
const Page = require('client/components/page')


module.exports = branch({
	page: ['page']
}, class PageController extends React.Component {
	static contextTypes = ContextTypes

	static propTypes = {
		children: React.PropTypes.element,
		page: React.PropTypes.object.isRequired
	}

	constructor(props, context) {
		super(props, context)
		this.state = {
			initState: context.tree.get()
		}
	}

	render() {
		const {children, page} = this.props
		const {initState} = this.state

		return (
			<Page children={children}
				initState={initState}
				{...page} />
		)
	}
})