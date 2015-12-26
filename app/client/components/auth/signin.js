const {React, PureRenderMixin, LinkedStateMixin, Promise, mixins, branch} = require('app/client/vendor');
const actions = require('app/client/actions');


@branch({cursors: {
	error: ['error']
}})
@mixins(PureRenderMixin)
@mixins(LinkedStateMixin)
export default class extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.action = Promise.resolve();
		this.state = {
			email: null,
			password: null
		};
	}

	componentWillUnmount() {
		actions.error.clear();
		this.cancelAction();
	}

	cancelAction = () => {
		if (this.action.isPending()) {
			this.action.cancel();
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {email, password} = this.state;

		this.cancelAction();
		this.action = actions.user.signInAsync({email, password});
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