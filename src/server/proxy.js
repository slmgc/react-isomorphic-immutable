module.exports = require('express')()
	.use('/proxy', (req, res) => {
		const url = `http://jsonplaceholder.typicode.com${req.url}`
		req.pipe(request(url)).pipe(res.type('json'))
	})