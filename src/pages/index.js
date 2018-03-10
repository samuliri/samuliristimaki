import React from 'react';
// import Script from 'react-load-script';
// import Link from 'gatsby-link';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { FakeImg } from '../components/FakeImg/FakeImg';
// import { Banner } from '../components/Banner/Banner';
// import { createGroupedArray } from '../utils/createGroupedArray';

import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import samuliImg from '../images/samuliristimaki.jpg';
// import bannerImg from '../images/banner-1.jpg';
// import bannerMobileImg from '../images/banner-mobile.jpg';

function IndexPage({ data }) {
	return (
		<div className="main">
			<TitleAndMetaTags />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Samuli<br />
						<span className="title-desc">Ristimäki</span>
						<Typewriter className="title-desc" texts={['code.', 'design.']} />
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							Just a simple Finnish / American dude, who currently is working as
							an all-around Developer, and wants to create awesome stuff.{' '}
							<sup className="-yellow">&#9679;</sup>{' '}
						</p>
					</div>
					<a href="https://github.com/samuliri" className="button -block">
						{' '}
						<sup className="-yellow">&#9679;</sup> github
					</a>
				</div>
				<br />

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-3 lg-push-2 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={samuliImg} />
						</div>

						<div className="col fluid md-7 lg-6 fake-img-wrapper">
							<FakeImg className="-three-x-two" img={img3} />
						</div>
					</div>
				</div>
			</Section>

			<Section className="-yellow">
				<div className="grid">
					<blockquote className="col md-6 md-push-1 lg-push-2">
						<h3 className="h1">Helsinki, the coolest city of the north.</h3>
						<p className="measure-wider">
							<a href="http://www.hypehel.com" className="button -block">
								hypehel.com
							</a>
						</p>
					</blockquote>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={img4} />
					</div>
				</div>
			</Section>

			<Section className="-salmon testimonial slope">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							This site is build with Gatsby, React and GraphQL. Hosted on
							Firebase. The code is open source and available at Github.
						</h3>
						<a
							href="https://github.com/samuliri/samuliristimaki"
							className="button -block">
							repository
						</a>
					</blockquote>
				</div>
			</Section>

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

export default IndexPage;
