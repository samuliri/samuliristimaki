import React from 'react';
import Helmet from 'react-helmet';

export function TitleAndMetaTags({ url, pathname, title, description }) {
	return (
		<Helmet>
			<title>
				{title} – {description}
			</title>

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
	description: 'Life.'
};
