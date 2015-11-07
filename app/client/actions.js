const request = require('superagent-bluebird-promise');
const actions = {
	error: {},
	user: {}
};


actions.user.signIn = async (tree, {email, password}) => {
	try {
		const user = (await request
			.put('/api/session')
			.send({email, password})).body;
		tree.set('user', user);
	} catch (e) {
		actions.error.set(tree, e);
	}
};

actions.user.signOut = async (tree) => {
	try {
		const user = (await request
			.del('/api/session')).body;
		tree.set('user', user);
	} catch (e) {
		actions.error.set(tree, e);
	}
};

actions.error.set = (tree, e) => {
	const {error} = e.body;
	console.warn(error.message);
	tree.set('error', error);
};

actions.error.clear = (tree) => {
	tree.set('error', null);
};


export default actions;