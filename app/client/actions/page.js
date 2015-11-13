const Promise = require('bluebird');
const request = Promise.promisifyAll(require('superagent'));
const actions = require('app/client/actions');


export default {
	set: (tree, options) => {
		const page = Object.assign({},
			tree.get('page'), options);
		tree.set('page', page);
	}
};