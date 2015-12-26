const {React, PureRenderMixin, mixins} = require('app/client/vendor');
const Layout = require('app/client/components/layout');
const actions = require('app/client/actions');


@mixins(PureRenderMixin)
export default class extends React.Component {
	componentDidMount() {
		actions.page.set({
			title: 'About'
		});
	}

	render() {
		console.info('About:render');

		return (
			<Layout />
		);
	}
}