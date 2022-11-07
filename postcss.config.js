module.exports = {
	plugins: [
		require('autoprefixer')({ remove: false }),
		require('postcss-preset-env')({
			stage: 3,
			features: {
				'nesting-rules': true
			}
		})
	]
};
