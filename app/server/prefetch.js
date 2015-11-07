const _ = require('lodash');
const {users} = require('app/server/db');
const {wrap} = require('app/server/errors');


export default require('express')()
	.get('*', wrap(async (req, res, next) => {
		const {id} = req.session;
		res.locals.initState = {
			error: null,
			user: null
		};

		if (id) {
			try {
				const user = (await users).findOne({id});
				res.locals.initState.user = _.pick(user, ['id', 'username']);
			} catch (e) {
				req.session = null;
			}
		}

		next();
	}))