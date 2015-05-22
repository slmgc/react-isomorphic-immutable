var {React, Router} = require('_libs');
var Routes = require('./components/Routes');


Router.run(Routes, Router.HistoryLocation, (Handler) =>
	React.render(<Handler />, document));