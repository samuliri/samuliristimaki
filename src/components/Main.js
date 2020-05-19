import React from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/bg.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/Kipsi-1.jpg';
import pic04 from '../images/pallo2.jpg';
import pic05 from '../images/ufo.jpg';
import pic06 from '../images/Untitled-1.png';
import pic07 from '../images/IMG_0120.jpg';
import pic08 from '../images/btn.png';
import pic09 from '../images/hypehel.png';
import pic10 from '../images/aura.jpg';

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
				<article
					id="intro"
					className={`${this.props.article === 'intro' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Intro</h2>
					<span className="image cover">
						<img src={pic01} alt="" />
					</span>
					<p>
						When I was younger I wondered what I wanted to do when I'm older. I
						didn't know the answer because it had been with me most of my life.
						I was interested in information technology and, unknowingly, in new
						media because my family only had an 1999 Apple PowerBook. This was a
						bit frustrating at the time because the machine couldn't do all the
						same things that my friends Windows machine could do. Afterwards I
						understand why this was a great thing. Because there were no games 
						to play, I entertained myself with image editing and own web pages. 
						I got into the creative virtual world.
					</p>
					<p>
						I currently work as a developer at a large media house. I am very
						interested in user interfaces and front-end development. I study New
						Media Design and Production in university. My strengths are
						international experience and strong desing-based programming
						experience.
					</p>
					<br></br>
					<ul className="w-list-unstyled gradient-border">
						<li
							data-ix="tag-displaay-info-1"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">1992</span>
								<span className="marker-text">
									Born in <span>Washington D.C.</span>
								</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-1"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">1992-2011</span>
								<span className="marker-text">Taking it easy</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-3"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2011-2015</span>
								<span className="marker-text">
									Helsinki Metropolia University of Applied Sciences, Engineer
									of Information Technology
								</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-3"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2014</span>
								<span className="marker-text">
									Bilkent University, Computer Technology and Information
									Systems
								</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-4"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2014-2016</span>
								<span className="marker-text">
									Web Developer, Finnish Net Solutions&nbsp;
								</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-5"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2016-2017</span>
								<span className="marker-text">
									Application Designer, InnovationLab at A-lehdet
								</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-5"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2017-Today</span>
								<span className="marker-text">Developer, Frantic</span>
							</div>
						</li>
						<li
							data-ix="tag-displaay-info-5"
							className="about-skills-list-item">
							<div className="marker-block w-clearfix">
								<span className="timeline-date">2018-Today</span>
								<span className="marker-text">
									Aalto University, New Media Design and Production
								</span>
							</div>
						</li>
					</ul>
					{close}
				</article>

				<article
					id="work"
					className={`${this.props.article === 'work' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Work</h2>

					<div className="cv">
						<ul>
							<li>
								<b>
									Frantic
									<br></br>
									8/2017-
									<br></br>
									Developer
								</b>
								<br></br>
								<p>
									Front-end development, design and development of web user
									interfaces, responsive design and development. Work for
									clients: University of the Arts Helsinki, Länsiauto, Kopiosto,
									National Audit Office of Finland, R-kioski and Finnair.
								</p>
							</li>
							<li>
								<b>
									A-lehdet
									<br></br>
									5/2016-8/2017
									<br></br>
									Application Designer
								</b>
								<br></br>
								<p>
									Front-end innovation, design and development. My role on an
									in-house team was to develop the user experience and user
									interfaces of web content management systems. Projects:
									(Lily.fi, Theblogawards.fi and Meillakotona.fi).
								</p>
							</li>
							<li>
								<b>
									Finnish Net Solutions
									<br></br>
									6/2014-5/2016
									<br></br>
									Web Developer
								</b>
								<br></br>
								<p>
									Web development of information system for therapists
									(Diarium.fi). Tasks include for example developing the
									appointment system, client listing and responsive mobile
									design. I’ve also worked on several other projects.
								</p>
							</li>
							<li>
								<b>
									University of Helsinki
									<br></br>
									6/2013-8/2013
									<br></br>
									Technical Assistant
								</b>
								<br></br>
								<p>
									Software development in Java and XML. The project was to
									program a software that generates graphical user interfaces
									based on the application programming interface. The work also
									included becoming familiar with a major open source project
									(Anduril.org) and its development.
								</p>
							</li>
						</ul>
					</div>
					{close}
				</article>

				<article
					id="art"
					className={`${this.props.article === 'art' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Art</h2>
					<h3 className="major">Digital painting</h3>
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
						<img src={pic10} alt="" />
					</span>
					<p>Aura (2020)</p>
					<iframe src="https://www.openprocessing.org/sketch/897146/embed/?plusEmbedHash=M2I2Y2EyYzk5NGYwZmU0ZmVjYmU5ZjY3NzEwNTMwNzA4Njk4YjI2YTU3ZTM1YTZkNDk5M2I0ZDQ4MGE1YWM5NmQwMmNmM2IxM2JmMWVlNTJjNDIwOGQ2ODY2ODRmYjQyZGMyODkxZDExMmVkMjlhNjNjZjgwNWM3ZTBkMzdjNWZwNFdGenBHa1lVSC9kbUdWOG9wNDJ1alozeEQ5U2JoMlVyN2Y4dkszbml0RkZvYkRRK0tNRmFoSkdEdHdIU1RkUnN4ODdYUk5oMFVCUnJ2QkdENzZRZz09" width="100%" height="300"></iframe>
					<p>
						<a href="https://www.openprocessing.org/sketch/897146" target="_blank">
							Web (2020)
						</a>
					</p>
					<h3 className="major">Sound</h3>
					<div className="videoWrapper videoWrapper1">
						<iframe
							src="https://player.vimeo.com/video/367604711"
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
							width="640"
							height="639"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen></iframe>
					</div>
					<p>things could’ve ended differently (2019)</p>
					<div className="videoWrapper videoWrapper3">
						<iframe
							src="https://player.vimeo.com/video/367605233"
							width="640"
							height="465"
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen></iframe>
					</div>
					<p>way too many sleepless nights (2019)</p>
					{/*
					<h3 className="major">Traditional painting</h3>
					<span className="image main">
						<img src={pic07} alt="" />
					</span>
					<p>Elisabet (2019)</p>
					-->
					*/}
					<h3 className="major">Web</h3>
					<span className="image main">
						<img src={pic08} alt="" />
					</span>
					<p>
						<a href="https://btndsgn.netlify.com" target="_blank">
							btn.design (2018)
						</a>
					</p>
					<span className="image main">
						<img src={pic09} alt="" />
					</span>
					<p>
						<a href="https://hypehel.herokuapp.com/" target="_blank">
							Hypehel (2018)
						</a>
					</p>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
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
								href="https://www.facebook.com/samuli.ristimaki"
								className="icon fa-facebook">
								<span className="label">Facebook</span>
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/sampo69  "
								className="icon fa-instagram">
								<span className="label">Instagram</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/samuli-ristim%C3%A4ki-332a0349"
								className="icon fa-linkedin">
								<span className="label">Linkedin</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/samuliri" className="icon fa-github">
								<span className="label">GitHub</span>
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
