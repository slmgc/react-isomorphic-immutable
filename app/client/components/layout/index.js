const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Nav = require('app/client/components/layout/nav');


@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
		return (
			<div className="container">
				<Nav />
				{this.props.children}
			</div>
		);
	}
}