var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: "app/main.js",
	output: {
		path: __dirname + "/dist",
		// libraryTarget: 'var',
		// library: "RTChat_LiarsDice",
		filename: "bundle.js"
	},
	resolve: { alias: {
		app: __dirname + '/app',
		views: 'app/views',
		utils: 'app/utils',
		styles: 'app/styles',
	} },
	plugins: [
		new webpack.ProvidePlugin({
			// These become available to all files.
			$: "jquery",
			_: "underscore",
			Rivets: "rivets",
		}),
	],
	module: {
		loaders: [
			{ test:  /\.json$/, loaders: ["hson"] },
			{ test:  /\.s?css$/, loaders: ["style", "css", "sass"] },
			{ // ES6 support.
				test:  /\.js$/,
				loader: "babel",
				exclude: /node_modules/,
				query: { presets: ['es2015'] }
			},
		]
	},
	devtool: 'source-map',
};

if (process.argv.indexOf('--minify') >= 0) {
	var CompressionPlugin = require("compression-webpack-plugin");

	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	);
	module.exports.plugins.push(
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.html$/
		})
	);
}
