const React = require('react');
const {mixins} = require('core-decorators');
const PureRenderMixin = require('react-addons-pure-render-mixin');
const Layout = require('app/client/components/layout');
const LoginForm = require('app/client/components/login-form');


@mixins(PureRenderMixin)
export default class extends React.Component {
	render() {
		return (
			<Layout>
				<LoginForm />
			</Layout>
		);
	}
}