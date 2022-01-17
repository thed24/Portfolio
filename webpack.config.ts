import { Configuration } from 'webpack';
import { default as MiniCssExtractPlugin } from 'mini-css-extract-plugin';

const config: Configuration = {
	mode: 'development',
	module: {
		rules: [
			{
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				test: /\.[tj]sx?$/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
};

export default config;
