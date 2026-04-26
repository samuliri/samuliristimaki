import React from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/bg.jpg';
import pic03 from '../images/Kipsi-1.jpg';
import pic04 from '../images/pallo2.jpg';
import pic08 from '../images/btn.png';
import pic09 from '../images/hypehel.png';
import pic10 from '../images/aura.jpg';
import pic11 from '../images/Untitled_Artwork.jpg';
import pic12 from '../images/cover.png';
import pic13 from '../images/process10.png';
import balloonRace from '../images/balloon-race.jpg';
import anniversary from '../images/anniversary.png';
import wrapped from '../images/wrapped.png';
import communityHub from '../images/comunity-hub.png';
import halftime from '../images/halftime.png';
import bones from '../images/bones.png';

class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}></div>
		);

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

				{/* ── ABOUT ── */}
				<article
					id="about"
					className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}>
					<h2 className="major">About</h2>
					<span className="image cover">
						<img src={pic01} alt="" />
					</span>
					<p>
						<i>
						When I was a kid, my family only had a 1999 Apple PowerBook. No games,
						so I entertained myself with building my own web pages.
						Frustrating at the time, but looking back, it was the best thing that could've happened.
						I got pulled into the creative side of technology and never really left.
						</i>
					</p>
					<br></br>
					<ul className="w-list-unstyled gradient-border">
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">1992</span>
								<span className="marker-text">
									Born in <span>Washington D.C.</span>
								</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2011-2015</span>
								<span className="marker-text">
									Metropolia University — B.Eng. Information Technology
								</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2014-2016</span>
								<span className="marker-text">
									Web Developer, Finnish Net Solutions
								</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2016-2017</span>
								<span className="marker-text">
									Application Designer, A-lehdet
								</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2017-2022</span>
								<span className="marker-text">Developer, Frantic</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2018-2021</span>
								<span className="marker-text">
									Aalto University — M.A. New Media Design and Production
								</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2022-</span>
								<span className="marker-text">Senior Software Developer, Reaktor</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2023-2025</span>
								<span className="marker-text">
									Laurea University — MBA, Innovative Digital Services
								</span>
							</div>
						</li>
						<li className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2024-</span>
								<span className="marker-text">Developer at Supercell (via Reaktor)</span>
							</div>
						</li>
					</ul>
					{close}
				</article>

				{/* ── PROJECTS ── */}
				<article
					id="projects"
					className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}>
					<h2 className="major">Projects</h2>

					<h3>At Supercell</h3>
					<p>
						Since September 2024 I've been in the Supercell Community Tech team,
						building interactive in-game web experiences that reach millions of daily
						active players. Here are some of the things I've shipped:
					</p>

					<h4>Balloon Race — Clash Royale</h4>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '2rem'
					}}>
						<div style={{
							width: '260px',
							padding: '12px 8px',
							background: '#1a1a1a',
							borderRadius: '36px',
							border: '3px solid #3a3a3a',
							boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.05)'
						}}>
							<div style={{
								width: '80px',
								height: '6px',
								background: '#2a2a2a',
								borderRadius: '3px',
								margin: '4px auto 10px'
							}} />
							<img
								src={balloonRace}
								alt="Balloon Race community event in Clash Royale"
								style={{
									width: '100%',
									borderRadius: '24px',
									display: 'block'
								}}
							/>
							<div style={{
								width: '100px',
								height: '4px',
								background: '#2a2a2a',
								borderRadius: '2px',
								margin: '10px auto 4px'
							}} />
						</div>
					</div>
					<p>
						A team racing event where community cheer their team forward in a real-time race
						to the finish line. I built the full experience end-to-end: real-time race
						progression, cheer multiplier, podium screen with position-based
						rewards.
						The backend runs on Lambda + DynamoDB with secure reward claim verification.
						Optimized for zero CLS and instant font loading.
					</p>

					<h4>Wrapped — Hay Day</h4>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '2rem',
						overflow: 'hidden'
					}}>
						<div style={{
							maxWidth: '100%',
							padding: '8px 12px',
							background: '#1a1a1a',
							borderRadius: '36px',
							border: '3px solid #3a3a3a',
							boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.05)',
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							boxSizing: 'border-box'
						}}>
							<div style={{
								width: '6px',
								height: '80px',
								background: '#2a2a2a',
								borderRadius: '3px',
								flexShrink: 0
							}} />
							<img
								src={wrapped}
								alt="Wrapped year-in-review experience for Hay Day"
								style={{
									minWidth: 0,
									flex: 1,
									borderRadius: '24px',
									display: 'block'
								}}
							/>
							<div style={{
								width: '4px',
								height: '100px',
								background: '#2a2a2a',
								borderRadius: '2px',
								flexShrink: 0
							}} />
						</div>
					</div>
					<p>
						An interactive year-in-review experience that takes players through
						personalized stats: years played, crops harvested, friends made; Across a
						multi-slide journey with Rive animations, a memory game, canvas-rendered community
						stats, and social sharing. Sound effects, responsive iPad layouts, and
						multi-language localization across all major regions.
					</p>

					<h4>Anniversary — Interactive Voting Event</h4>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '2rem'
					}}>
						<div style={{
							width: '260px',
							padding: '12px 8px',
							background: '#1a1a1a',
							borderRadius: '36px',
							border: '3px solid #3a3a3a',
							boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.05)'
						}}>
							<div style={{
								width: '80px',
								height: '6px',
								background: '#2a2a2a',
								borderRadius: '3px',
								margin: '4px auto 10px'
							}} />
							<img
								src={anniversary}
								alt="Anniversary interactive voting event"
								style={{
									width: '100%',
									borderRadius: '24px',
									display: 'block'
								}}
							/>
							<div style={{
								width: '100px',
								height: '4px',
								background: '#2a2a2a',
								borderRadius: '2px',
								margin: '10px auto 4px'
							}} />
						</div>
					</div>
					<p>
						A multi-day progressive event where players vote on characters through animated
						presents. Daily voting with poll results, reward claiming with animation sequences,
						SpellFactory voucher integration, and Contentful CMS for dynamic content.
						Full multi-language support and Snowplow analytics tracking.
					</p>

					<h4>Community Hub — Clash Royale</h4>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '2rem'
					}}>
						<div style={{
							width: '260px',
							padding: '12px 8px',
							background: '#1a1a1a',
							borderRadius: '36px',
							border: '3px solid #3a3a3a',
							boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.05)'
						}}>
							<div style={{
								width: '80px',
								height: '6px',
								background: '#2a2a2a',
								borderRadius: '3px',
								margin: '4px auto 10px'
							}} />
							<img
								src={communityHub}
								alt="Community Hub content platform in Clash Royale"
								style={{
									width: '100%',
									borderRadius: '24px',
									display: 'block'
								}}
							/>
							<div style={{
								width: '100px',
								height: '4px',
								background: '#2a2a2a',
								borderRadius: '2px',
								margin: '10px auto 4px'
							}} />
						</div>
					</div>
					<p>
						The content platform living inside Clash Royale. I built the for example,
						carousel, polls, the esports integration (live countdowns,
						pre-live banners, article system), and shipped significant
						performance improvements: AVIF/WebP image optimization, font optimization and
						bundle reduction.
					</p>

					<h4>Super Bowl Halftime Countdown — Clash Royale</h4>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '2rem'
					}}>
						<div style={{
							width: '260px',
							padding: '12px 8px',
							background: '#1a1a1a',
							borderRadius: '36px',
							border: '3px solid #3a3a3a',
							boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.05)'
						}}>
							<div style={{
								width: '80px',
								height: '6px',
								background: '#2a2a2a',
								borderRadius: '3px',
								margin: '4px auto 10px'
							}} />
							<img
								src={halftime}
								alt="Super Bowl Halftime Countdown in Clash Royale"
								style={{
									width: '100%',
									borderRadius: '12px',
									display: 'block'
								}}
							/>
							<div style={{
								width: '100px',
								height: '4px',
								background: '#2a2a2a',
								borderRadius: '2px',
								margin: '10px auto 4px'
							}} />
						</div>
					</div>
					<p>
						A dedicated countdown timer application for the Super Bowl halftime event.
						Custom theme styling and branding for a one-of-a-kind live moment.
					</p>

					<h4>Bones — Clash Royale</h4>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '2rem'
					}}>
						<div style={{
							width: '260px',
							padding: '12px 8px',
							background: '#1a1a1a',
							borderRadius: '36px',
							border: '3px solid #3a3a3a',
							boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.05)'
						}}>
							<div style={{
								width: '80px',
								height: '6px',
								background: '#2a2a2a',
								borderRadius: '3px',
								margin: '4px auto 10px'
							}} />
							<img
								src={bones}
								alt="Bones community progress tracker in Clash Royale"
								style={{
									width: '100%',
									borderRadius: '24px',
									display: 'block'
								}}
							/>
							<div style={{
								width: '100px',
								height: '4px',
								background: '#2a2a2a',
								borderRadius: '2px',
								margin: '10px auto 4px'
							}} />
						</div>
					</div>
					<p>
						A community progress tracker where players collectively gather bones to
						unlock milestone rewards. Featuring a falling-bones physics simulation,
						animated counter with real-time increments, pattern animations, and
						milestone banners.
					</p>

					<h3>Tech I work with daily</h3>
					<p>
						Astro, React, Vue.js, TypeScript, Node.js, Python, AWS (Lambda, CloudFront, S3, DynamoDB),
						Terraform, Docker, Rive, HLS.js, Zod, Playwright, Snowplow, Contentful, GraphQL, JWT.
					</p>
					{close}
				</article>

				{/* ── CREATIVE ── */}
				<article
					id="creative"
					className={`${this.props.article === 'creative' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}>
					<h2 className="major">Creative</h2>
					<p>
						<i>
							Sometimes the best way<br />
							to understand technology<br />
							is to make something<br />
							beautiful with it.
						</i>
					</p>
					<h3 className="major">Music</h3>
					<iframe
						style={{ borderRadius: '12px', marginBottom: '2rem' }}
						src="https://open.spotify.com/embed/album/3kiXK8GmjoaLi28HUC37NF?utm_source=generator&theme=0"
						width="100%"
						height="352"
						frameBorder="0"
						allowFullScreen
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"></iframe>
					<h3 className="major">Digital painting</h3>
					<span className="image main">
						<img src={pic11} alt="" />
					</span>
					<p>Untitled (2021)</p>
					<span className="image main">
						<img src={pic03} alt="" />
					</span>
					<p>Untitled (2019)</p>
					<span className="image main">
						<img src={pic04} alt="" />
					</span>
					<p>Untitled (2019)</p>
					<h3 className="major">Generative art</h3>
					<span className="image main">
						<img src={pic13} alt="" />
					</span>
					<p>Process 10.1 (2021)</p>
					<span className="image main">
						<img src={pic10} alt="" />
					</span>
					<p>Aura (2020)</p>
					<iframe
						src="https://www.openprocessing.org/sketch/897146/embed/?plusEmbedHash=M2I2Y2EyYzk5NGYwZmU0ZmVjYmU5ZjY3NzEwNTMwNzA4Njk4YjI2YTU3ZTM1YTZkNDk5M2I0ZDQ4MGE1YWM5NmQwMmNmM2IxM2JmMWVlNTJjNDIwOGQ2ODY2ODRmYjQyZGMyODkxZDExMmVkMjlhNjNjZjgwNWM3ZTBkMzdjNWZwNFdGenBHa1lVSC9kbUdWOG9wNDJ1alozeEQ5U2JoMlVyN2Y4dkszbml0RkZvYkRRK0tNRmFoSkdEdHdIU1RkUnN4ODdYUk5oMFVCUnJ2QkdENzZRZz09"
						loading="lazy"
						width="100%"
						height="300"></iframe>
					<p>
						<a href="https://www.openprocessing.org/sketch/897146" target="_blank" rel="noreferrer">
							Web (2020)
						</a>
					</p>
					<h3 className="major">Sound & Video</h3>
					<div className="videoWrapper videoWrapper1">
						<iframe
							src="https://player.vimeo.com/video/367604711"
							loading="lazy"
							width="640"
							height="360"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen></iframe>
					</div>
					<p>you could just fly away (2018)</p>
					<div className="videoWrapper videoWrapper2">
						<iframe
							src="https://player.vimeo.com/video/367605053"
							loading="lazy"
							width="640"
							height="639"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen></iframe>
					</div>
					<p>things could've ended differently (2019)</p>
					<div className="videoWrapper videoWrapper3">
						<iframe
							src="https://player.vimeo.com/video/367605233"
							loading="lazy"
							width="640"
							height="465"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen></iframe>
					</div>
					<p>way too many sleepless nights (2019)</p>
					<div className="videoWrapper videoWrapper4">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/WnZt1DGP62I?rel=0"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
					<p>Norway summer roadtrip '20 // SUPER 8 FILM</p>
					<h3 className="major">Web</h3>
					<span className="image main">
						<img src={pic12} alt="" />
					</span>
					<p>
						<a href="https://alt-gen-b50bc.firebaseapp.com/" target="_blank" rel="noreferrer">
							alt-gen (2021)
						</a>
					</p>
					{close}
				</article>

				{/* ── CONTACT ── */}
				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}>
					<h2 className="major">Contact</h2>
					<h3>
						<p>
							<a href="mailto: samuli.ristimaki@gmail.com">
								samuli.ristimaki<span className="icon fa-at"></span>gmail.com
							</a>
						</p>
					</h3>
					<ul className="icons">
						<li>
							<a
								href="https://www.linkedin.com/in/samuli-ristim%C3%A4ki-332a0349"
								className="icon fa-linkedin">
								<span className="label">LinkedIn</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/samuliri" className="icon fa-github">
								<span className="label">GitHub</span>
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/sampo69"
								className="icon fa-instagram">
								<span className="label">Instagram</span>
							</a>
						</li>
					</ul>
					{close}
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired
};

export default Main;
