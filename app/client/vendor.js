const Promise = require('bluebird');


export default {
	Baobab: require('baobab'),
	branch: require('baobab-react/decorators').branch,
	createBrowserHistory: require('history/lib/createBrowserHistory'),
	LinkedStateMixin: require('react-addons-linked-state-mixin'),
	mixins: require('core-decorators').mixins,
	PureRenderMixin: require('react-addons-pure-render-mixin'),
	React: require('react'),
	ReactDOM: require('react-dom'),
	ReactRouter: require('react-router'),
	request: Promise.promisifyAll(require('superagent')),
	Root: require('baobab-react/wrappers').Root,
};