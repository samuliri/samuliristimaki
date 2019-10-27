import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, withPrefix } from 'gatsby';

import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
	let content;

	if (location && location.pathname === '/') {
		content = <div>{children}</div>;
	} else {
		content = (
			<div id="wrapper" className="page">
				<div>{children}</div>
			</div>
		);
	}

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<>
					{content}
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{ name: 'description', content: 'Samuli Ristimäki - Portfolio' },
							{ name: 'keywords', content: 'samuli, ristimaki, portfolio, new, media, design' }
						]}>
						<html lang="en" />
						<script src={withPrefix('dat.gui.min.js')} type="text/javascript" />
						<script src={withPrefix('bg.js')} type="text/javascript" />
					</Helmet>
				</>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
