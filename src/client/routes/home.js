const {ContextTypes} = require('client/common/types')
const LayoutController = require('client/controllers/layout')
const PostsController = require('client/controllers/posts')


module.exports = class HomeRoute extends React.Component {
	static contextTypes = ContextTypes

	componentWillMount() {
		const {actions, tree} = this.context
		actions.app.setPage({title: 'Home'}, tree)
	}

	render() {
		return (
			<LayoutController>
				<PostsController />
			</LayoutController>
		)
	}
}