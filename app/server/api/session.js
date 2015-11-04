const md5 = require('md5');
const {users} = require('app/server/db');
const {APIError, wrap} = require('app/server/errors');


module.exports = require('express')()
	.put('/api/session', wrap(async (req, res) => {
		const {email, password} = req.body;
		let session = null;

		try {
			const user = (await users).findOne({
				email: email.toLowerCase(),
				password: md5(password)
			});

			session = {id: user.id};
		} catch (e) {}

		res.json(req.session = session);
	}))

	.delete('/api/session', wrap(async (req, res) => {
		res.json(req.session = null);
	}));