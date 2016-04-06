const actions = require('client/actions')
const {request, requestPrefix} = require('client/common/utils')


module.exports = {
	get(tree) {
		const url = '/proxy/posts'
		const req = request.get(url).use(requestPrefix)
		const promise = req.endAsync()
		const cursorPosts = tree.select('posts')

		cursorPosts.set('isLoading', true)

		return promise
			.then((res) => {
				const {body: posts} = res
				cursorPosts.set('items', posts)
			})
			.catch((e) => {
				actions.app.setError(e, tree)
			})
			.finally(() => {
				cursorPosts.set('isLoading', false)

				if (promise.isCancelled()) {
					req.abort()
				}
			})
	}
}