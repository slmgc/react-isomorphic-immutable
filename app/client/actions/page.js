const tree = require('app/client/state');


export default {
	set: (options) => {
		const page = Object.assign({}, tree.get('page'), options);
		tree.set('page', page);
	}
};