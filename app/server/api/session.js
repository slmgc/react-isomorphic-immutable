const _ = require('lodash');
const md5 = require('md5');
const {users} = require('app/server/db');
const {APIError, wrap} = require('app/server/errors');


module.exports = require('express')()
	.put('/api/session', wrap(async (req, res) => {
		const {email, password} = req.body;

		try {
			const user = (await users).findOne({
				email: email.toLowerCase(),
				password: md5(password)
			});

			req.session = {id: user.id};
			res.json(_.pick(user, ['id', 'username']));
		} catch (e) {
			req.session = null;
			throw new APIError('Invalid email or password', 401);
		}
	}))

	.delete('/api/session', wrap(async (req, res) => {
		res.json(req.session = null);
	}));