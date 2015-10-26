const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Nav = require('app/client/components/layout/nav');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return (
			<div className="container">
				<Nav />
				{this.props.children}
			</div>
		);
	}
});