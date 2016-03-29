const isEqual = require('lodash.isequal')
const {match, RouterContext} = require('react-router')
const {renderToString} = require('react-dom/server')
const actions = require('client/actions')
const routes = require('client/routes')
const {root} = require('baobab-react/higher-order')
const ActionsController = require('client/controllers/actions')


function render(tree, props) {
	const Root = root(tree, () =>
		<ActionsController actions={actions}>
			<RouterContext {...props} />
		</ActionsController>
	)

	return renderToString(<Root />)
}

module.exports = require('express')()
	.get('*', (req, res) => {
		match({routes, location: req.url}, (e, location, props) => {
			if (location) {
				res.redirect(301, location.pathname + location.search)
			} else if (props) {
				const {tree} = res.locals
				let counter = 3
				let state, html

				do {
					counter -= 1
					state = tree.get()
					html = render(tree, props)
				} while (counter && !isEqual(state, tree.get()))

				res.send(`<!doctype html>${html}`)
			} else if (e) {
				res.sendStatus(500)
			} else {
				res.sendStatus(404)
			}
		})
	})