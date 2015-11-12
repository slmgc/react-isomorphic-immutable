const Promise = require('bluebird');
const request = Promise.promisifyAll(require('superagent'));
const actions = {
	error: {},
	page: {},
	user: {}
};


actions.error.set = (tree, e) => {
	const {error} = e.body;
	console.warn(error.message);
	tree.set('error', error);
};

actions.error.clear = (tree) => {
	tree.set('error', null);
};

actions.user.signIn = async (tree, {email, password}) => {
	try {
		const user = (await request
			.put('/api/session')
			.send({email, password})
			.endAsync()).body;
		tree.set('user', user);
	} catch (e) {
		actions.error.set(tree, e);
	}
};

actions.user.signOut = async (tree) => {
	try {
		const user = (await request
			.del('/api/session')
			.endAsync()).body;
		tree.set('user', user);
	} catch (e) {
		actions.error.set(tree, e);
	}
};

actions.page.set = (tree, options) => {
	const page = Object.assign({},
		tree.get('page'), options);
	tree.set('page', page);
};


export default actions;