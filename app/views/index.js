var {React} = require('_libs');
var {PureRenderMixin} = React.addons;
var Layout = require('../components/layout');


module.exports = React.createClass({
	mixins: [PureRenderMixin],
	render: function(){
		var page = {title: 'Home',
			description: 'Home Page'};

		return (
			<Layout page={page}>Hello!</Layout>
		);
	}
});