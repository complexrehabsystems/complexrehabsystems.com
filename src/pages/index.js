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
import jonathan from "../assets/jonathan.png"
import patrick from "../assets/patrick.png"
import tom from "../assets/tom.jpg"
import avatar from "../assets/avatar.png"
import hima from "../assets/himadusumilli.jpg"

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
  const navigationInfo = data.allNavigationYaml.edges[0].node;
  const whatWeDoInfo = data.allWhatWeDoYaml.edges[0].node;
  const people = data.allPeopleYaml.edges.map(e => e.node).sort((a,b)=>a.displayOrder > b.displayOrder);
  const leadership = people.filter(p => p.role == "leadership");
  const developers = people.filter(p => p.role == "developer");

  const socialLink = (href, icon) => {
    if(!href)
      return "";

    return <a href={href}>{icon}</a>
  }

  return <div className="layout">

    <Header className="site-header">

      <img src={logo} className="logo"/>

      <div className="mission">
        <h3>{headerInfo.tagline}</h3>
        <h2>{headerInfo.popoutTagline}</h2>
        <p>{headerInfo.popoutTextBlock}</p>
      </div>

    </Header>

    <a id="top-link" href="#">
      <UpArrowIcon/>
      <h2>Top</h2>
    </a>

    <div className="content">

      <section id="nav" className="ctas">

        <a href="#about">
          <div className="cta">
            <InfoIcon className="cta-icon"/>
            <h4 className="cta-info">About CRS</h4>
          </div>
        </a>

        <a href="#team">
          <div className="cta">
            <PeopleIcon className="cta-icon"/>
            <h4 className="cta-info">Meet the Team</h4>
          </div>
        </a>

        <a href="#signup">
          <div className="cta">
            <MailIcon className="cta-icon"/>
            <h4 className="cta-info">Signup for E-Mail Updates</h4>
          </div>
        </a>

      </section>

      <div className="sections">

        <section id="about">
          <h1>About CRS</h1>
          <div className="section-content">
            <h2>(this is really dummy text)</h2>
          </div>
        </section>

        <section id="team">
          <h1>The Team</h1>

          <div className="section-content">
            <h2>Leadership</h2>
            <div className="people">
              {leadership.map( p => 
                <div className="person">
                  {console.log(images)}
                  {console.log(images[p.title])}
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
              )}
            </div>

            <h2>Developers</h2>
            <div className="people">
              {developers.map( p => 
                <div className="person">
                  {console.log(images)}
                  {console.log(images[p.title])}
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
              )}

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
          <h1>Email Signup</h1>
          <div className="section-content">
          <h2>Signup Now</h2>
            <img src={signupImg}/>
            <h2>To Receive Email Updates about CRS and Our Products</h2>
            <form id="contact" name="contact" method="POST" action="/?success" data-netlify="true" netlify>
              <input name="email" type="email" required/>
              <input type="submit" value="Signup Now"/>
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
          background
          logo
          tagline
          popoutTagline
          popoutTextBlock
        }
      }
    }
    
    allNavigationYaml {
      edges{
        node {
          whatWeDoButton{
            btnImage
            btnHoverImage
            btnText
          }
          whoWeAreButton{
            btnImage
            btnHoverImage
            btnText
          }
          getInTouchButton{
            btnImage
            btnHoverImage
            btnText
          }
        }
      }
    }
    
    
    allWhatWeDoYaml{
      edges {
        node {
          sectionHeading
          characterImage
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
          image
          tagline
          buttonText
          successMessage
        }
      }
    }
  }
`