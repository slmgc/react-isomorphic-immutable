const {React, PureRenderMixin, mixins} = require('app/client/vendor');
const actions = require('app/client/actions');


@mixins(PureRenderMixin)
export default class extends React.Component {
	static contextTypes = {
		tree: React.PropTypes.any
	}

	onSignOut = () => {
		const {tree} = this.context;
		actions.user.signOut(tree);
	}

	render() {
		const {error} = this.props;
		console.info('SignOut:render');

		return (
			<div className="form-field">
				<button className="button"
					onClick={this.onSignOut}>Sign Out</button>
			</div>
		);
	}
}