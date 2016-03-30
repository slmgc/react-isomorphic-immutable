const {request, requestPrefix} = require('client/common/utils')


module.exports = {
	identify({id}, tree) {
		const url = `/proxy/users/${id}`
		const req = request.get(url).use(requestPrefix)
		const promise = req.endAsync()

		return promise
			.then((res) => {
				const {body: user} = res
				tree.set('user', user)
			})
			.catch((e) => {
				actions.app.setError(e, tree)
			})
	}
}