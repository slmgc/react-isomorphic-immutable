const isEqual = require('lodash.isequal')
const lru = require('lru-cache')
const {match, RouterContext} = ReactRouter
const objectHash = require('object-hash')
const {renderToString} = require('react-dom/server')
const {root} = require('baobab-react/higher-order')
const actions = require('client/actions')
const ActionsController = require('client/controllers/actions')
const routes = require('client/routes')


const cache = lru({
	max: 1000
})

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
				const {pathname, search} = props.location
				let nextState = tree.get()
				const hash = objectHash([nextState, pathname, search])
				let html = cache.get(hash)

				if (!html) {
					let count = 3
					let isDone
					let state

					do {
						count -= 1
						state = nextState
						html = render(tree, props)
						nextState = tree.get()
						isDone = !count || isEqual(state, nextState)
					} while (!isDone)

					cache.set(hash, html)
				}

				res.send(`<!doctype html>${html}`)
			} else if (e) {
				res.sendStatus(500)
			} else {
				res.sendStatus(404)
			}
		})
	})