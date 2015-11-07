const React = require('react');
const {mixins} = require('core-decorators');
const {branch} = require('baobab-react/decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Layout = require('app/client/components/layout');
const LoginForm = require('app/client/components/login-form');


@branch({cursors: {
	user: ['user']
}})
@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
		const {user} = this.props;

		return (
			<Layout>
				{!user &&
					<LoginForm />
				}
			</Layout>
		);
	}
}