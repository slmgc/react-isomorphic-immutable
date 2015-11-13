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