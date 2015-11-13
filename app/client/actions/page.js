export default {
	set: (tree, options) => {
		const page = Object.assign({},
			tree.get('page'), options);
		tree.set('page', page);
	}
};