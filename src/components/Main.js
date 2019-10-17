import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/bg.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/Kipsi-1.jpg'
import pic04 from '../images/pallo2.jpg'
import pic05 from '../images/ufo.jpg'
import pic06 from '../images/Untitled-1.png'
import pic07 from '../images/IMG_0120.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>When I was younger I wondered what I wanted to do when I'm older, I didn't know the answer because it had been with me most of my life. I was interested in information technology and, unknowingly, in new media because my family only had an Apple PowerBook 1999. This was a bit annoying because at the time, the machine couldn't do all the same things what my friends Windows machine could do. Afterwards I understand why this was a great thing. I got into the creative virtual world because there were no games to play, so I entertained myself with image editing and my own HTML pages.</p>
          <p>I currently work as a developer at a large media house. I am very interested in user interfaces and front-end development. I study New Media Design and Production in university. My strengths are international experience and strong desing-based programming experience.</p>
          <br></br>
          <ul  className="w-list-unstyled gradient-border"><li data-ix="tag-displaay-info-1"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">1992</span><span  className="marker-text">Born in <span>Washington D.C.</span></span></div></li><li data-ix="tag-displaay-info-1"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">1992-2011</span><span  className="marker-text">Taking it easy</span></div></li><li data-ix="tag-displaay-info-3"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">2011-2015</span><span  className="marker-text">Helsinki Metropolia University of Applied Sciences, Engineer of Information Technology</span></div></li><li data-ix="tag-displaay-info-3"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">2014</span><span  className="marker-text">Bilkent University, Computer Technology and Information Systems</span></div></li><li data-ix="tag-displaay-info-4"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">2014-2016</span><span  className="marker-text">Web Developer, Finnish Net Solutions&nbsp;</span></div></li><li data-ix="tag-displaay-info-5"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">2016-2017</span><span  className="marker-text">Application Designer, InnovationLab at A-lehdet</span></div></li><li data-ix="tag-displaay-info-5"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">2017-Today</span><span  className="marker-text">Developer, Frantic</span></div></li><li data-ix="tag-displaay-info-5"  className="about-skills-list-item"  ><div  className="marker-block w-clearfix"><span  className="timeline-date">2018-Today</span><span  className="marker-text">Aalto University, New Media Design and Production</span></div></li></ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          
          <div className="cv">
          <ul>
          <li>
            <b>Frantic 
            <br></br>
            8/2017-
            <br></br>
            Developer
            </b>
            <br></br>
            <p>
            Front-end development, WordPress development, Design and development of web user interfaces, responsive design and development. Work for clients: University of the Arts Helsinki, Länsiauto, Kopiosto, National Audit Office of Finland, R-kioski and Finnair.
            </p>
          </li>
          <li>
            <b>A-lehdet
            <br></br>
            5/2016-8/2017
            <br></br>
            Application Designer
            </b>
            <br></br>
            <p>
            Front-end innovation, design and development. My role on an in-house team was to develop the user experience and user interfaces of web content management systems. Projects: (Lily.fi, Theblogawards.fi and Meillakotona.fi).
            </p>
          </li>
          <li>
            <b>Finnish Net Solutions
            <br></br>
            6/2014-5/2016
            <br></br>
            Web Developer
            </b>
            <br></br>
            <p>
            Web development of information system for therapists (Diarium.fi). Tasks include for example developing the appointment system, client listing and responsive mobile design. I’ve also worked on several other projects.
            </p>
          </li>
          <li>
            <b>University of Helsinki
            <br></br>
            6/2013-8/2013
            <br></br>
            Technical Assistant
            </b>
            <br></br>
            <p>
            Tasks: Software development in Java and XML. The project was to program a software that generates graphical user interfaces based on the application programming interface. The work also included becoming familiar with a major open source project (Anduril.org) and its development.
            </p>
          </li>
          </ul>
          </div>
          {close}
        </article>

        <article id="art" className={`${this.props.article === 'art' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Art</h2>
          <h3 className="major">Digital painting</h3>
          <span className="image main"><img src={pic03} alt="" /></span>
          <span className="image main"><img src={pic04} alt="" /></span>
          <h3 className="major">Painting</h3>
          <span className="image main"><img src={pic07} alt="" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h4>
            <p>
              <a href = "mailto: samuli.ristimaki@gmail.com">samuli.ristimaki<span className="icon fa-at"></span>gmail.com</a>
            </p>
          </h4>
          <ul className="icons">
            <li><a href="https://www.facebook.com/samuli.ristimaki" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/sampo69  " className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/samuli-ristim%C3%A4ki-332a0349" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/samuliri" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main