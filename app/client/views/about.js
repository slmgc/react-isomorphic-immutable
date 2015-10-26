const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Layout = require('app/client/components/layout');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return (
			<Layout />
		);
	}
});