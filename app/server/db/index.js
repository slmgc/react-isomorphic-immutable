const loki = require('lokijs');
const db = new loki('db/dev.db');


export default {
	users: new Promise((resolve) => {
		db.loadDatabase({}, () => {
			resolve(db.getCollection('users'));
		});
	})
};