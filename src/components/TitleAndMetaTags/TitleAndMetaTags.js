import React from 'react';
import Helmet from 'react-helmet';

export function TitleAndMetaTags({ url, pathname, title, description, desc }) {
	return (
		<Helmet>
			<title>
				{title} – {description}
			</title>

			<meta name="author" content={title} />
			<meta name="description" content={desc} />

			<meta property="og:url" content={`${url}/${pathname}`} />
			<meta property="og:image" content={`${url}/social/hero-1.jpg`} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
		</Helmet>
	);
}

TitleAndMetaTags.defaultProps = {
	url: 'http://samuliristimaki.life',
	pathname: '',
	title: 'Samuli Ristimäki',
	description: 'Life.',
	desc:
		'Just a simple Finnish / American dude, who currently is working as an all-around Developer, and wants to create awesome stuff. This site is build with Gatsby, React and GraphQL. Hosted on Firebase. The code is open source and available at Github.'
};
