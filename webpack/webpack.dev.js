const merge = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		noInfo: true,
		port: 5000
	}
};

module.exports = merge(common, dev);
