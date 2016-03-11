module.exports = {
	get(tree) {
		const url = '/proxy/posts'
		const req = request.get(url)
		const promise = req.endAsync()
		const cursorPosts = tree.select('posts')

		cursorPosts.set('isLoading', true)

		return promise
			.then((res) => {
				const {body: posts} = res
				cursorPosts.set('items', posts)
			})
			.finally(() => {
				cursorPosts.set('isLoading', false)
				if (promise.isCancelled()) {
					req.abort()
				}
			})
	}
}