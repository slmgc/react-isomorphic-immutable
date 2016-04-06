require('client/common/globals')
const {browserHistory, Router} = ReactRouter
const {root} = require('baobab-react/higher-order')
const actions = require('client/actions')
const ActionsController = require('client/controllers/actions')
const routes = require('client/routes')
const tree = new Baobab(window.__INIT_STATE__)


const Root = root(tree, () =>
	<ActionsController actions={actions}>
		<Router history={browserHistory}>{routes}</Router>
	</ActionsController>
)

ReactDOM.render(<Root />, document)