const {ContextTypes} = require('client/common/types')
const LayoutController = require('client/controllers/layout')
const PostsController = require('client/controllers/posts')


module.exports = class NotFoundRoute extends React.Component {
	static contextTypes = ContextTypes

	componentWillMount() {
		const {actions, tree} = this.context
		actions.app.setPage({title: '404'}, tree)
	}

	render() {
		return (
			<LayoutController>
				404 Not Found
			</LayoutController>
		)
	}
}