module.exports = require('express')()
	.use(require('body-parser').json())
	.use(require('server/api/session'))