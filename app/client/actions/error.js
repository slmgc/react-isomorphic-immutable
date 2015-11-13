const Promise = require('bluebird');
const request = Promise.promisifyAll(require('superagent'));
const actions = require('app/client/actions');


export default {
	set: (tree, e) => {
		const {error} = e.response.body;
		console.warn(error.message);
		tree.set('error', error);
	},

	clear: (tree) => {
		tree.set('error', null);
	}
};