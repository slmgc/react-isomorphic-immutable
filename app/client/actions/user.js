const Promise = require('bluebird');
const request = Promise.promisifyAll(require('superagent'));
const actions = require('app/client/actions');


export default {
	signIn: async (tree, {email, password}) => {
		try {
			const user = (await request
				.put('/api/session')
				.send({email, password})
				.endAsync()).body;
			tree.set('user', user);
		} catch (e) {
			actions.error.set(tree, e);
		}
	},

	signOut: async (tree) => {
		try {
			const user = (await request
				.del('/api/session')
				.endAsync()).body;
			tree.set('user', user);
		} catch (e) {
			actions.error.set(tree, e);
		}
	}
};