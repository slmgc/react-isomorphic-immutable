const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const LinkedStateMixin = require('react-addons-linked-state-mixin');


@mixins(PureRenderMixin)
@mixins(LinkedStateMixin)
export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.warn('Not Implemented');
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
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

				<div className="form-field">
					<button className="button">Sign In</button>
				</div>
			</form>
		);
	}
}