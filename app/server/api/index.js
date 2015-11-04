const config = require('app/server/config');


export default require('express')()
	.use(require('body-parser').json())
	.use(require('cookie-session')({
		name: 'session',
		secret: config.SESSION_SECRET
	}))
	.use(require('app/server/api/session'))
	.use(require('app/server/errors').handler);