import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import ReactGA from 'react-ga';

import { Nav } from '../components/Nav/Nav';
import './index.scss';

const faviconSizes = [16, 32, 64];

export default class TemplateWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// const { location } = this.props;
		// ReactGA.initialize('UA-80289891-3');
		// ReactGA.pageview(location.pathname + location.search);
	}

	componentDidUpdate() {
		// const { location } = this.props;
		// ReactGA.pageview(location.pathname + location.search);
	}

	render() {
		const { children } = this.props;
		return (
			<div id="wrapper">
				<Helmet>
					<link
					// href="https://fonts.googleapis.com/css?family=Montserrat"
					// rel="stylesheet"
					/>
					{faviconSizes.map(size => (
						<link
							rel="icon"
							type="image/png"
							href={`/social/${size}x${size}.png`}
							sizes={`${size}x${size}`}
							key={`${size}x${size}`}
						/>
					))}
				</Helmet>

				<Nav />

				{children()}
			</div>
		);
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func
};
