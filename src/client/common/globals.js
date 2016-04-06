const Promise = require('bluebird')
Promise.config({cancellation: true})
require('babel-runtime/core-js/promise').default = Promise


Object.assign(global, {
	Baobab: require('baobab'),
	Promise,
	React: require('react'),
	ReactDOM: require('react-dom'),
	ReactRouter: require('react-router')
})