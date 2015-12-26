const {Baobab} = require('app/client/vendor');
let initState = {};


try {
	initState = window.__INIT_STATE__;
} catch (e) {}


export default new Baobab(initState);