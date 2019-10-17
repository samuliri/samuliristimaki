module.exports = {
	siteMetadata: {
		title: 'Samuli Ristimäki',
		author: 'Samuli Ristimäki',
		description: 'Samuli Ristimäki - Portfolio'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'samuli-ristimäki',
				short_name: 'samuli',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/64x64.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline'
	]
};
