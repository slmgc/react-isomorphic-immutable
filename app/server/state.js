const config = require('app/server/config');


export default {
	getDefaultState: () => {
		return {
			error: null,
			page: {
				lang: config.DEFAULT_LOCALE
			},
			user: null
		};
	}
};