var {React, Router, Reflux} = require('_libs');
var {PureRenderMixin} = React.addons;
var {RouteHandler} = Router;
var Page = require('./page');
var Nav = require('./nav');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		var {page, children} = this.props;

		return (
			<Page {...page}>
				<Nav />
				{children}
			</Page>
		);
	}
});