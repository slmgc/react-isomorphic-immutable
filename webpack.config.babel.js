'use strict'
const dependencies = require('./package.json').dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const NpmInstallPlugin = require('npm-install-webpack-plugin')
const webpack = require('webpack')
const env = process.env.NODE_ENV
const isProduction = env === 'production'


const vendor = []

for (let key in dependencies) {
	vendor.push(key)
}

const plugins = [
	new ExtractTextPlugin('bundle.css', {allChunks: true}),
	new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
]

if (isProduction) {
	plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: false
		})
	)
} else {
	plugins.push(
		new NpmInstallPlugin()
	)
}

module.exports = {
	entry: {
		app: './src/client',
		vendor
	},
	module: {
		loaders: [{
			loader: ExtractTextPlugin.extract('css'),
			test: /\.css$/
    	}, {
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				cacheDirectory: true
			},
			test: /\.js$/
		}]
	},
	output: {
		filename: 'app.js',
		path: 'public'
	},
	plugins
}