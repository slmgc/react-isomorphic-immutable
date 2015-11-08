const React = require('react');
const {mixins} = require('core-decorators');
const {branch} = require('baobab-react/decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Layout = require('app/client/components/layout');
const LoginForm = require('app/client/components/login-form');
const actions = require('app/client/actions');


@branch({cursors: {
	user: ['user']
}})
@mixins(PureRenderMixin)
export default class extends React.Component {
	static contextTypes = {
		tree: React.PropTypes.any
	}

	render() {
		const {user} = this.props;
		const {tree} = this.context;

		return (
			<Layout>
				{user
					? <div className="form-field">
						<button className="button"
							onClick={actions.user.signOut.bind(this, tree)}>Sign Out</button>
					</div>

					: <LoginForm />
				}
			</Layout>
		);
	}
}