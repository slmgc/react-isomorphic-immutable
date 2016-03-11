module.exports = {
	identify({id}, tree) {
		const url = `/proxy/users/${id}`
		const req = request.get(url)
		const promise = req.endAsync()

		return promise
			.then((res) => {
				const {body: user} = res
				tree.set('user', user)
			})
	}
}