const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');


@mixins(PureRenderMixin)
export default class extends React.Component {
	static contextTypes = {
		initState: React.PropTypes.any
	}

	render() {
		const {lang, title, description, children} = this.props;
		const {initState} = this.context;

		return (
			<html lang={lang}>
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
					<title>{title}</title>
					<meta content={description} name="description" />
					<link rel="stylesheet" href="/bundle.css" />
					<script dangerouslySetInnerHTML={{__html: `window.__INIT_STATE__ = ${JSON.stringify(initState)}`}} />
					<script defer src="/bundle.js" />
				</head>
				<body>{children}</body>
			</html>
		);
	}
}