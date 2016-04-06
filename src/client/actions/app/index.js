const {getDefaultState} = require('client/common/state')


module.exports = {
	setError({response}, tree) {
		const {error} = response.body
		tree.set('error', error)
	},

	setPage(options, tree) {
		const {page} = getDefaultState()
		tree.merge('page', Object.assign(page, options))
	}
}