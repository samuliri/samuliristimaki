import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			<span className="icon fa-strikethrough"></span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Samuli Ristimäki</h1>
				<p>Web developer crafting interactive experiences</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						href="#"
						onClick={() => {
							props.onOpenArticle('about');
						}}>
						About
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={() => {
							props.onOpenArticle('projects');
						}}>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={() => {
							props.onOpenArticle('creative');
						}}>
						Creative
					</a>
				</li>
				<li>
					<a
						href="#"
						onClick={() => {
							props.onOpenArticle('contact');
						}}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Header;
