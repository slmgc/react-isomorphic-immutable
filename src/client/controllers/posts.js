const {branch} = require('baobab-react/higher-order')
const ContextTypes = require('client/common/context-types')
const Posts = require('client/components/posts')


module.exports = branch(class PostsController extends React.Component {
	static contextTypes = ContextTypes

	static propTypes = {
		posts: React.PropTypes.object.isRequired
	}

	componentDidMount() {
		const {actions, tree} = this.context
		actions.posts.get(tree)
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