var {React, Router} = require('_libs');
var {PureRenderMixin} = React.addons;
var {RouteHandler} = Router;


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		var {lang, title, description, children} = this.props;

		return (
			<html lang={lang}>
				<head>
					<meta charSet="utf-8" />
					<title>{title}</title>
					<meta content={description} name="description" />
					<script src="/vendor.js" defer />
					<script src="/bundle.js" defer />
				</head>
				<body>{children}</body>
			</html>
		);
	}
});