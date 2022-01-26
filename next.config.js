const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([[withSass]], {
	webpack(config, options) {
		config.resolve.modules.push(path.resolve('./'));
		return config;
	},
});
