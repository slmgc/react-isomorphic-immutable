const NpmInstallPlugin = require('npm-install-webpack-plugin')


module.exports = {
	entry: './src/client',
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	plugins: [new NpmInstallPlugin()],
	module: {
		loaders: [{
			loader: 'babel',
			test: /\.js$/,
			exclude: /node_modules/,
			query: {
				cacheDirectory: true
			}
		}]
	}
}