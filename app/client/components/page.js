const {React, PureRenderMixin, mixins, branch} = require('app/client/vendor');


@branch({cursors: {
	page: ['page']
}})
@mixins(PureRenderMixin)
export default class extends React.Component {
	static contextTypes = {
		tree: React.PropTypes.any
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			initState: `window.__INIT_STATE__ = ${
				JSON.stringify(context.tree.get())
			}`
		};
	}

	render() {
		const {page, children} = this.props;
		const {lang, title, description} = page;
		const {initState} = this.state;
		console.info('Page:render');

		return (
			<html lang={lang}>
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
					<title>{title}</title>
					<meta content={description} name="description" />
					<link rel="stylesheet" href="/bundle.css" />
					<script dangerouslySetInnerHTML={{__html: initState}} />
					<script defer src="/vendor.js" />
					<script defer src="/bundle.js" />
				</head>
				<body>{children}</body>
			</html>
		);
	}
}