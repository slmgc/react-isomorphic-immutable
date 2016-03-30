const actions = require('client/actions')
const Baobab = require('baobab')
const {getDefaultState} = require('client/common/state')


module.exports = require('express')()
	.get('*', (req, res, next) => {
		res.locals.tree = new Baobab(getDefaultState(), {
			asynchronous: false
		})

		next()
	})

	.get('*', async (req, res, next) => {
		const {id} = req.session

		if (id) {
			const {tree} = res.locals
			await actions.user.identify({id}, tree)
		}

		next()
	})

	// HINT: uncomment to prefetch posts
	// .get('*', async (req, res, next) => {
	// 	const {tree} = res.locals
	// 	await actions.posts.get(tree)
	//
	// 	next()
	// })