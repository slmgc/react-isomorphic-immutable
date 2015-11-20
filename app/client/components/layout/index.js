const {React, PureRenderMixin, mixins} = require('app/client/vendor');
const Nav = require('app/client/components/layout/nav');


@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
		console.info('Layout:render');

		return (
			<div className="container">
				<Nav />
				{this.props.children}
			</div>
		);
	}
}