module.exports = {
	request: Promise.promisifyAll(require('superagent')),
	requestPrefix(request) {
		const {url} = request
		const prefix = url.startsWith('/') ? 'http://localhost:8080' : ''

		request.url = `${prefix}${url}`
		return request
	}
}