const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Layout = require('app/client/components/layout');


@mixins(PureRenderMixin)
export default class About extends React.Component {
	render() {
		return (
			<Layout />
		);
	}
}