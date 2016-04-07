const lru = require('lru-cache')
const actions = require('client/actions')
const {request, requestPrefix} = require('client/common/utils')


const cache = lru({
	maxAge: 1000 * 60
})

module.exports = {
	get(tree) {
		const url = '/proxy/posts'
		const req = request.get(url).use(requestPrefix)
		const cursorPosts = tree.select('posts')
		const cachedPosts = cache.get('posts')

		if (cachedPosts) {
			cursorPosts.set('items', cachedPosts)
			return Promise.resolve()
		}

		cursorPosts.set('isLoading', true)
		const promise = req.endAsync()
		return promise
			.then((res) => {
				const {body: posts} = res
				cache.set('posts', posts)
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