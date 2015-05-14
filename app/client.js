var {React, Router} = require('_libs');
var routes = require('./views/routes');


Router.run(routes, Router.HistoryLocation, (Handler) =>
	React.render(<Handler />, document));