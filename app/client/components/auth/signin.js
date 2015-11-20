const {React, PureRenderMixin, LinkedStateMixin, mixins, branch} = require('app/client/vendor');
const actions = require('app/client/actions');


@branch({cursors: {
	error: ['error']
}})
@mixins(PureRenderMixin)
@mixins(LinkedStateMixin)
export default class extends React.Component {
	static contextTypes = {
		tree: React.PropTypes.any
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			email: null,
			password: null
		};
	}

	componentWillUnmount() {
		const {tree} = this.context;
		actions.error.clear(tree);
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {tree} = this.context;
		const {email, password} = this.state;
		actions.user.signIn(tree, {email, password});
	}

	render() {
		const {error} = this.props;
		console.info('SignIn:render');

		return (
			<form className="form auth-form"
				onSubmit={this.onSubmit}>

				<div className="form-field">
					<input className="input"
						valueLink={this.linkState('email')}
						placeholder="Email"
						type="email"
						required />
				</div>

				<div className="form-field">
					<input className="input"
						valueLink={this.linkState('password')}
						placeholder="Password"
						type="password"
						required />
				</div>

				{error &&
					<div className="alert">{error.message}</div>
				}

				<div className="form-field">
					<button className="button">Sign In</button>
				</div>
			</form>
		);
	}
}