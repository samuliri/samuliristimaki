module.exports = {
	siteMetadata: {
		title: 'Samuli Ristimäki',
		description:
			'Just a simple Finnish / American dude, who currently is working as an all-around Developer, and wants to create awesome stuff.'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#f09a7a',
				showSpinner: false
			}
		},
		'gatsby-transformer-json',
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`
			}
		}
	]
};
