require('client/common/globals')
const {browserHistory, Router} = require('react-router')
const {render} = require('react-dom')
const actions = require('client/actions')
const routes = require('client/routes')
const tree = new Baobab(window.__INIT_STATE__)
const {Root} = require('baobab-react/wrappers')
const ActionsController = require('client/controllers/actions')


render(
	<Root tree={tree}>
		<ActionsController actions={actions}>
			<Router history={browserHistory}>{routes}</Router>
		</ActionsController>
	</Root>, document
)