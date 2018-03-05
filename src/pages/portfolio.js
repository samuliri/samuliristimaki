import React from 'react';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
// import { Banner } from '../components/Banner/Banner';

import { createGroupedArray } from '../utils/createGroupedArray';

//import bannerMobileImg from '../images/banner-mobile.jpg';
// import bannerImg from '../images/banner-1.jpg';

// <div className="col sm-12 md-6 md-push-0 lg-4 lg-push-2">
// 	<img src={project.image} />
// </div>

function Project({ className, project }) {
	return (
		<div className="section project-section">
			<div className="grid">
				<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
					<h1 style={{ marginTop: 0 }}>{project.name}</h1>
					<h2 className="color-salmon">
						{project.tech} {project.type}
					</h2>
					<p className="small">
						{project.description}
						{project.desc}
					</p>
					<a href={project.url} className="color-blue">
						{project.url}
					</a>
					<br />
					<a href={project.repo} className="color-blue">
						{project.repo}
					</a>
				</div>
			</div>
		</div>
	);
}

function PortfolioPage({ data }) {
	const groupedData = createGroupedArray(data.allMarkdownRemark.edges, 7);

	return (
		<div className="main">
			<TitleAndMetaTags title="Portfolio" pathname="portfolio" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Samuli<br />
						<span className="title-desc">Ristimäki</span>
						<Typewriter className="title-desc" texts={['portfolio.', 'projects.']} />
					</h1>
				</div>
			</Section>
			{groupedData.map((group, index) => (
				<div key={`group-${index}`} className="grid projects-list">
					{group.map(({ node }, index) => (
						<Project
							key={node.frontmatter.name}
							project={node.frontmatter}
							className={index === 0 ? 'md-push-2 lg-push-3' : ''}
						/>
					))}
				</div>
			))}

			{/* <Banner img={bannerImg} mobileImg={bannerMobileImg} /> */}

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

export default PortfolioPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query BuyPageQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						name
						type
						tech
						description
						url
						repo
						image
					}
				}
			}
		}
	}
`;
