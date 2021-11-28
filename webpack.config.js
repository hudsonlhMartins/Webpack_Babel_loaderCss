const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = {
    
    mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'production' ,

    entry: path.resolve(__dirname, './src/index.jsx'),
    
	output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.jsx', '.js'],
    },

	

	devServer: {
		static: {
		  directory: path.join(__dirname, "public/"),
		},
		port: 3000,
		devMiddleware: {
		  publicPath: "https://localhost:3000/dist/",
		},
		
	  },

    module:{
		// aqui ficar config, de como app vai se comporta com diferente de import__
		// ex img, sass etc..
		rules: [
			{
				// vai ser um {} para cada tipo de file .sass .svg etc..
				test: /\.jsx$/,  // aqui esta verificando se o file e jsx
				exclude: /node_modules/, // aqui ele não vai procurar nessa pasta
				use: 'babel-loader'
			},

			{
				test: /\.css$/, 
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'] // tem que ser nessa ordem
			}
		],
	}
}