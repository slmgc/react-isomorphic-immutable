const tree = require('app/client/state');


export default {
	set: (e) => {
		const {error} = e.response.body;
		console.warn(error.message);
		tree.set('error', error);
	},

	clear: () => {
		tree.set('error', null);
	}
};