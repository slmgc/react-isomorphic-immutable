const {getDefaultState} = require('client/common/state')


module.exports = {
	set(options, tree) {
		const {page} = getDefaultState()
		tree.merge('page', Object.assign(page, options))
	}
}