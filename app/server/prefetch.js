const _ = require('lodash');
const {users} = require('app/server/db');
const {wrap} = require('app/server/errors');
const {getDefaultState} = require('app/server/state');


export default require('express')()
	.get('*', wrap(async (req, res, next) => {
		const {id} = req.session;
		res.locals.initState = getDefaultState();

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

	.get('/', (req, res, next) => {
		const {user} = res.locals.initState;
		res.locals.initState.page.title = user
			? `Home - ${user.username}`
			: 'Home';
		next();
	})

	.get('/about', (req, res, next) => {
		const {user} = res.locals.initState;
		res.locals.initState.page.title = 'About';
		next();
	});