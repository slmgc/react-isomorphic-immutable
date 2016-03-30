const Promise = require('bluebird')
Promise.config({cancellation: true})
require('babel-runtime/core-js/promise').default = Promise


Object.assign(global, {
	Promise,
	React: require('react')
})