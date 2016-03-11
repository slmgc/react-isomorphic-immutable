const Promise = require('bluebird')
Promise.config({cancellation: true})
require('babel-runtime/core-js/promise').default = Promise


Object.assign(global, {
	Baobab: require('baobab'),
	Promise,
	React: require('react'),
	request: Promise.promisifyAll(require('superagent'))
})