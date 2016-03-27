const {branch} = require('baobab-react/higher-order')
const ContextTypes = require('client/common/context-types')
const Posts = require('client/components/posts')


module.exports = branch(class PostsController extends React.Component {
	static contextTypes = ContextTypes

	static propTypes = {
		posts: React.PropTypes.object.isRequired
	}

	constructor(props, context) {
		super(props, context)
		this.pendingActions = []
	}

	componentDidMount() {
		const {actions, tree} = this.context
		const {items} = this.props.posts

		if (!items.length) {
			this.pendingActions.push(actions.posts.get(tree))
		}
	}

	componentWillUnmount() {
		this.cancelPendingActions()
	}

	cancelPendingActions = () => {
		this.pendingActions.forEach((action) =>
			action.isPending() && action.cancel())
	}

	render() {
		const {posts} = this.props

		return (
			<Posts {...posts} />
		)
	}
}, {cursors: {
	posts: ['posts']
}})