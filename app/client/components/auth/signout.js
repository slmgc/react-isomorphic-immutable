const {React, PureRenderMixin, Promise, mixins} = require('app/client/vendor');
const actions = require('app/client/actions');


@mixins(PureRenderMixin)
export default class extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.action = Promise.resolve();
	}

	componentWillUnmount() {
		this.cancelAction();
	}

	cancelAction = () => {
		if (this.action.isPending()) {
			this.action.cancel();
		}
	}

	onSignOut = () => {
		this.cancelAction();
		this.action = actions.user.signOutAsync();
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