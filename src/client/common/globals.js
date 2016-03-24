const Promise = require('bluebird')
Promise.config({cancellation: true})
require('babel-runtime/core-js/promise').default = Promise


const reqPrefix = (request) => {
	const prefix = 'http://localhost:8080'
	request.url = `${prefix}${request.url}`
	return request
}

Object.assign(global, {
	Baobab: require('baobab'),
	Promise,
	React: require('react'),
	request: Promise.promisifyAll(require('superagent')),
	reqPrefix
})