const express = require('express')
const app = express()
const env = app.get('env')
const port = 8080


app.use(express.static('public', {maxAge: '1y'}))
	.use(require('server/proxy'))
	.use(require('server/api'))
	.use(require('server/prefetch'))
	.use(require('server/render'))
	.listen(port, () =>
		console.info(`${env} server started at port ${port}`))