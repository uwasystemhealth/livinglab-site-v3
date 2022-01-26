const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([[withImages]], {
	webpack(config, options) {
		config.resolve.modules.push(path.resolve('./'));
		return config;
	},
	// https://stackoverflow.com/questions/68008498/nextjs-typeerror-unsupported-file-type-undefined-after-update-to-v-11
	images: {
		disableStaticImages: true
	}
});
