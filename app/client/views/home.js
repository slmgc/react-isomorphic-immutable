const {React, PureRenderMixin, mixins, branch} = require('app/client/vendor');
const Layout = require('app/client/components/layout');
const SignIn = require('app/client/components/auth/signin');
const SignOut = require('app/client/components/auth/signout');
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

	render() {
		const {user} = this.props;
		console.info('Home:render');

		return (
			<Layout>
				{user
					? <SignOut />
					: <SignIn />
				}
			</Layout>
		);
	}
}