const config = require('server/config')


module.exports = require('express')()
	.use(require('cookie-session')({
		secret: config.SESSION_SECRET
	}))

	.put('/api/session', (req, res) => {
		const {email, password} = req.body

		// TODO: check user credentials
		// and assign a real user id

		const session = {id: 1}
		res.json(req.session = session)
	})

	.delete('/api/session', (req, res) => {
		res.json(req.session = {})
	})