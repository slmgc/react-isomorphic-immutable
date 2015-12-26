const {request} = require('app/client/vendor');
const tree = require('app/client/state');
const actions = require('app/client/actions');


export default {
	signIn: async ({email, password}) => {
		try {
			const user = (await request
				.put('/api/session')
				.send({email, password})
				.endAsync()).body;
			tree.set('user', user);
		} catch (e) {
			actions.error.set(e);
		};
	},

	signOut: async () => {
		try {
			const user = (await request
				.del('/api/session')
				.endAsync()).body;
			tree.set('user', user);
		} catch (e) {
			actions.error.set(e);
		};
	}
};