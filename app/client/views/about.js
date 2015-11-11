const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Layout = require('app/client/components/layout');
const actions = require('app/client/actions');


@mixins(PureRenderMixin)
export default class extends React.Component {
	static contextTypes = {
		tree: React.PropTypes.any
	}

	componentDidMount() {
		const {tree} = this.context;
		actions.page.set(tree, {
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