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

	componentDidMount() {
		this.onSetPage();
	}

	componentWillUpdate() {
		this.onSetPage();
	}

	onSetPage = () => {
		const {tree} = this.context;
		const user = tree.get('user');
		actions.page.set(tree, {
			title: user
				? `Home - ${user.username}`
				: 'Home'
		});
	}

	onSignOut = () => {
		const {tree} = this.context;
		actions.user.signOut(tree);
	}

	render() {
		const {user} = this.props;
		console.info('Home:render');

		return (
			<Layout>
				{user
					? <div className="form-field">
						<button className="button"
							onClick={this.onSignOut}>Sign Out</button>
					</div>

					: <LoginForm />
				}
			</Layout>
		);
	}
}