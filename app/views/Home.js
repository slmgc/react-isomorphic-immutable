var {React} = require('_libs');
var {PureRenderMixin} = React.addons;
var Layout = require('../components/Layout');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		return (
			<Layout>Home</Layout>
		);
	}
});