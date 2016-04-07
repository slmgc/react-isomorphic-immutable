const lru = require('lru-cache')
const {request, requestPrefix} = require('client/common/utils')


const cache = lru({
	max: 1000,
	maxAge: 1000 * 60
})

module.exports = {
	identify({id}, tree) {
		const url = `/proxy/users/${id}`
		const req = request.get(url).use(requestPrefix)
		const cachedUser = cache.get(id)

		if (cachedUser) {
			tree.set('user', cachedUser)
			return Promise.resolve()
		}

		const promise = req.endAsync()
		return promise
			.then((res) => {
				const {body: user} = res
				cache.set(id, user)
				tree.set('user', user)
			})
			.catch((e) => {
				actions.app.setError(e, tree)
			})
	}
}