const {STATUS_CODES} = require('http')


module.exports = require('express')()
	.use('/proxy', (req, res) => {
		const url = `http://jsonplaceholder.typicode.com${req.url}`
		console.info(`[PROXY][${req.method}]: ${url}`)

		req.pipe(request(url).on('error', (e) => {
			const status = 503
			const message = STATUS_CODES[status]

			res.status(status).json({error: {status, message}})
		})).pipe(res.type('json'))
	})