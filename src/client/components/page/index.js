require('bootstrap/dist/css/bootstrap.css')
require('./page.css')


module.exports = class Page extends React.Component {
	static propTypes = {
		children: React.PropTypes.element,
		description: React.PropTypes.string,
		initState: React.PropTypes.object.isRequired,
		lang: React.PropTypes.string,
		title: React.PropTypes.string
	}

	constructor(props, context) {
		super(props, context)
		this.state = {
			initState: `window.__INIT_STATE__ = ${
				JSON.stringify(props.initState)
			}`
		}
	}

	render() {
		const {children, description, lang, title} = this.props
		const {initState} = this.state

		return (
			<html lang={lang}>
				<head>
					<meta charSet="utf-8" />
					<title>{title}</title>
					<meta name="description" content={description} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="stylesheet" href="/bundle.css" />
				</head>
				<body>
					<div id="content">{children}</div>
					<script dangerouslySetInnerHTML={{__html: initState}} />
					<script src="/vendor.js" />
					<script src="/app.js" />
				</body>
			</html>
		)
	}
}