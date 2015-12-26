const {request} = require('app/client/vendor');
const tree = require('app/client/state');
const actions = require('app/client/actions');


export default {
	signInAsync: ({email, password}) => {
		const req = request
			.put('/api/session')
			.send({email, password});
		const promise = req.endAsync();

		return promise
			.then((res) => {
				tree.set('user', res.body);
			})
			.catch((e) => {
				actions.error.set(e);
			})
			.finally(() => {
				if (promise.isCancelled()) {
					req.abort();
				}
			});
	},

	signOutAsync: () => {
		const req = request.del('/api/session');
		const promise = req.endAsync();

		return promise
			.then((res) => {
				tree.set('user', res.body);
			})
			.catch((e) => {
				actions.error.set(e);
			})
			.finally(() => {
				if (promise.isCancelled()) {
					req.abort();
				}
			});
	}
};