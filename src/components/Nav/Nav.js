import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const toggleMenu = () => {
	const wrapper = document.getElementById('wrapper');
	wrapper.classList.toggle('open--menu');
};

const closeMenu = () => {
	const wrapper = document.getElementById('wrapper');
	wrapper.classList.remove('open--menu');
};

export class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<header>
				<button className="toggle" onClick={toggleMenu}>
					<span className="toggle__label">Menu</span>
					<div className="toggle__icon">
						<span />
						<span />
					</div>
				</button>
				<nav>
					<ul className="site-nav">
						<li>
							<Link to="/" onClick={closeMenu}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/portfolio" onClick={closeMenu}>
								Portfolio
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Nav;

Nav.propTypes = {
	toggleMenu: PropTypes.func,
	closeMenu: PropTypes.func
};
