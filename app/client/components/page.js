const React = require('react');
const PureRenderMixin = require('react-addons-pure-render-mixin');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		const {lang, title, description, children} = this.props;

		return (
			<html lang={lang}>
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
					<title>{title}</title>
					<meta content={description} name="description" />
					<link rel="stylesheet" href="/bundle.css" />
					<script defer src="/bundle.js" />
				</head>
				<body>{children}</body>
			</html>
		);
	}
});