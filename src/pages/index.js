import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import InfoIcon from "react-icons/lib/fa/info-circle"
import MailIcon from "react-icons/lib/fa/envelope"
import PeopleIcon from "react-icons/lib/fa/user"
import LinkedInIcon from "react-icons/lib/fa/linkedin-square"
import GithubIcon from "react-icons/lib/fa/github-square"
import AddPersonIcon from "react-icons/lib/fa/user-plus"
import UpArrowIcon from "react-icons/lib/fa/arrow-circle-o-up"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"
import signupImg from "../assets/about-crs2.jpg"

import daniel from "../assets/daniel.png"
import doug from "../assets/doug.png"
import jonathan from "../assets/jonathan.jpg"
import patrick from "../assets/patrick.jpg"
import tom from "../assets/tom.jpg"
import avatar from "../assets/avatar.png"
import hima from "../assets/himadusumilli.jpg"

import activeInfo from "../assets/nav-icons/crs-active-info.png";
import activeTeam from "../assets/nav-icons/crs-active-team.png";
import activeContact from "../assets/nav-icons/crs-active-contact.png";
import hoverInfo from "../assets/nav-icons/crs-hover-info.png";
import hoverTeam from "../assets/nav-icons/crs-hover-team.png";
import hoverContact from "../assets/nav-icons/crs-hover-contact.png";
import staticInfo from "../assets/nav-icons/crs-static-info.png";
import staticTeam from "../assets/nav-icons/crs-static-team.png";
import staticContact from "../assets/nav-icons/crs-static-contact.png";
import leftPadding from "../assets/nav-icons/crs-left-padding.png";
import rightPadding from "../assets/nav-icons/crs-right-padding.png";
import bgRepeat from "../assets/nav-icons/crs-bg-repeat.png";

import joeAtp from "../assets/joe-atp.png"

let images = {
  "Douglas Munsey": doug,
  "Thomas Whelan": tom,
  "Daniel Packard": daniel,
  "Patrick Abadi": patrick,
  "Jonathan Gilmore": jonathan,
  "Hima Bharathi Adusumilli": hima,
}

var remark = require('remark'),
    reactRenderer = require('remark-react');

// UTILITIES
const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
  window.addEventListener('scroll', debounce(function() {
    document.getElementById('top-link').style.opacity = (pageYOffset-800);
  }, 100));
}


// MAIN COMPONENT
export default ( {data}) => {
  const headerInfo = data.allHeaderYaml.edges[0].node;
  const whatWeDoInfo = data.allWhatWeDoYaml.edges[0].node;
  const getInTouchInfo = data.allGetInTouchYaml.edges[0].node;
  const people = data.allPeopleYaml.edges.map(e => e.node);
  const leadership = people.filter(p => p.role == "leadership").sort((a,b)=>a.displayOrder > b.displayOrder);
  const developers = people.filter(p => p.role == "developer").sort((a,b)=>a.displayOrder > b.displayOrder);

  const socialLink = (href, icon) => {
    if(!href)
      return "";

    return <a href={href}>{icon}</a>
  }

  const personCard = (p) => {
    return <div className="person">
      <img src={images[p.title]}/>
      <div className="overlay">
        <h1>{p.title}</h1>
        <h2>{p.jobTitle}</h2>
        <div className="about">
          {remark().use(reactRenderer).processSync(p.description).contents}
        </div>
        <div className="social-icons">
          {socialLink(p.linkedIn, <LinkedInIcon className="social-icon" />)}
          {socialLink(p.github, <GithubIcon className="social-icon" />)}
        </div>
      </div>
    </div>
  }


  return <div className="layout">

    <Header className="site-header">
        <div className="logo-mission">
            <img src={logo} className="logo" />
            <h3 className="mission">{headerInfo.tagline} </h3>
        </div>

        <div className="what-is-crs">
            <h1>{headerInfo.popoutTagline}</h1>
            <div className="text">
                <p>{headerInfo.popoutTextBlock}</p>
            </div>
        </div>

    </Header>

    <a id="top-link" href="#">
      <UpArrowIcon/>
      <h2>Top</h2>
    </a>

    <div className="content">

      <div id="nav" className="ctas">

        <a>
          <div className="cta">
            <img src={leftPadding} className="left-padding"/>
          </div>
        </a>

        <a href="#about">
          <div className="cta">
            <img src={staticInfo} className="cta-icon static"/>
            <img src={hoverInfo} className="cta-icon hover"/>
            <img src={activeInfo} className="cta-icon active"/>
            <h4>WHAT WE DO</h4>
          </div>
        </a>

        <a href="#team">
          <div className="cta">
            <img src={staticTeam} className="cta-icon static"/>
            <img src={hoverTeam} className="cta-icon hover"/>
            <img src={activeTeam} className="cta-icon active"/>
            <h4>WHO WE ARE</h4>
          </div>
        </a>

        <a href="#signup">
          <div className="cta">
            <img src={staticContact} className="cta-icon static"/>
            <img src={hoverContact} className="cta-icon hover"/>
            <img src={activeContact} className="cta-icon active"/>
            <h4>GET IN TOUCH</h4>
          </div>
        </a>

        <a>
          <div className="cta">
            <img src={rightPadding} className="right-padding" />
          </div>
        </a>

      </div>

      <div className="sections">

        <div id="about">
          <div className="joe-atp">
            <img src={joeAtp} className="joe-atp" />
          </div>
          <h1>SIMPLE AND CATCHY TAGLINE HERE</h1>
                  <p>{remark().use(reactRenderer).processSync(whatWeDoInfo.whatWeDoTextBlock).contents}</p>
        </div>

        <section id="team">
          <h1>The Team</h1>

          <div className="section-content">
            <h2>Leadership</h2>
            <div className="people">
              {leadership.map( p => personCard(p))}
            </div>

            <h2>Developers</h2>
            <div className="people">
              {developers.map( p => personCard(p))}

              {/* NOW HIRING CARD */}
              <div className="person">
                <img src={avatar}/>
                <div className="overlay hiring-overlay">
                  <h1>We're Hiring!</h1>
                  <p><a className="hiring" href="https://complexrehabsystems.github.io/job-descriptions">Click Here to Learn More</a></p>
                  <AddPersonIcon className="social-icon"></AddPersonIcon>
                  </div>
              </div>

            </div>

          </div>

        </section>

        <section id="signup">
          <h1>{getInTouchInfo.sectionHeading}</h1>
          <div className="section-content">
            <img src={signupImg}/>
            <h2>{getInTouchInfo.tagline}</h2>
            <form id="contact" name="contact" method="POST" action="/?success" data-netlify="true" netlify>
              <input name="email" type="email" required/>
              <input type="submit" value={getInTouchInfo.buttonText.toUpperCase()}/>
            </form>
          </div>
        </section>

      </div>
    </div>

    <Footer className="site-footer">
      <span>&copy; Complex Rehab Systems 2018</span>
      <span>1348 Westmore Court - Stevens Point, WI, USA - 54481</span>
    </Footer>

  </div>
}

export const query = graphql`
  query AllData {
  
    allHeaderYaml {
      totalCount
      edges {
        node {
          tagline
          popoutTagline
          popoutTextBlock
        }
      }
    }
    
    allWhatWeDoYaml{
      edges {
        node {
          sectionHeading
          whatWeDoTagline
          whatWeDoTextBlock
        }
      }
    }
    
    allPeopleYaml {
      totalCount
      edges {
        node {
          title
          displayOrder
          jobTitle
          description
          role
          linkedIn
          github
        }
      }
    }
    
    allGetInTouchYaml {
      edges{
        node{
          sectionHeading
          tagline
          buttonText
          successMessage
        }
      }
    }
  }
`