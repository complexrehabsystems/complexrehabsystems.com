import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import LinkedInIcon from "react-icons/lib/fa/linkedin-square"
import GithubIcon from "react-icons/lib/fa/github-square"
import CodepenIcon from "react-icons/lib/fa/codepen"
import AddPersonIcon from "react-icons/lib/fa/user-plus"
import UpArrowIcon from "react-icons/lib/fa/arrow-circle-o-up"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"

import daniel from "../assets/CRS_Daniel.jpg"
import patrick from "../assets/CRS_Patrick.jpg"

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

import SignupIcon from "react-icons/lib/fa/user-plus"
import AlertIcon from "react-icons/lib/fa/exclamation-triangle"

import joeAtpLeft from "../assets/Joe-ATP-LeftWave.png"

let images = {
    "Daniel": daniel,
    "Patrick": patrick,
}

var remark = require('remark'),
    reactRenderer = require('remark-react');

// UTILITIES
const debounce = (fn, time) => {
    let timeout;

    return function () {
        const functionCall = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return true; // this is a bool flag
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getHashParams() {
    console.log(window.location.hash);

    var hashParams = {};
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&;=]+)=?([^&;]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.hash.substring(1);

    while (e = r.exec(q))
        hashParams[d(e[1])] = d(e[2]);

    return hashParams;
}

function setSuccessMessageVisibility() {
    let msg = document.querySelector(".signup-success");
    let ctaTagline = document.querySelector(".cta-tagline");
    let form = document.querySelector("#signup");
    if (getParameterByName('success')) {
        msg.style = "display: block;";
        form.style = "display: none;";
        ctaTagline.style = "display: none;";
    }
}

function respectHashLink() {
    if (!window.location.hash)
        return;

    let h = window.location.hash;
    window.location.hash = h;
}

if (typeof window !== 'undefined') {

    if(window.location.search && window.location.search !== "?success" ) {
        window.location.href = "crs-app:" + window.location.search.replace("?", "");
        window.close();
    }

    require('smooth-scroll')('a[href*="#"]');

    window.addEventListener('scroll', debounce(function () {
        let topLink = document.getElementById('top-link')
        if (topLink)
            topLink.style.opacity = (pageYOffset - 800);
    }, 100));


    window.onload = () => {
        setSuccessMessageVisibility();
        respectHashLink();
    }
}

// MAIN COMPONENT
export default ({ data }) => {
    const headerInfo = data.allHeaderYaml.edges[0].node;
    const footerInfo = data.allFooterYaml.edges[0].node;
    const whatWeDoInfo = data.allWhatWeDoYaml.edges[0].node;
    const getInTouchInfo = data.allGetInTouchYaml.edges[0].node;
    const people = data.allPeopleYaml.edges.map(e => e.node);
    const developers = people.filter(p => p.role == "developer").sort((a, b) => { return a.displayOrder - b.displayOrder; });

    const socialLink = (href, icon) => {


        if (!href)
            return "";

        return <a href={href}>{icon}</a>
    }

    const personCard = (p) => {
        return <div className="person">
            <img src={images[p.title]} />
            <div className="overlay">
                <h1>{p.title}</h1>
                <h2>{p.jobTitle}</h2>
                <div className="about">
                    {remark().use(reactRenderer, { sanitize: false }).processSync(p.description).contents}
                </div>
                <div className="social-icons">
                    {socialLink(p.linkedIn, <LinkedInIcon className="social-icon" />)}
                    {socialLink(p.github, <GithubIcon className="social-icon" />)}
                    {socialLink(p.codepen, <CodepenIcon className="social-icon" />)}
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
            <UpArrowIcon />
            <h2>Top</h2>
        </a>

        <div className="content">

            <div id="nav" className="ctas">

                <a>
                    <div className="cta">
                        <img src={leftPadding} className="left-padding" />
                    </div>
                </a>

                <a href="#about-section">
                    <div className="cta">
                        <img src={staticInfo} className="cta-icon static" />
                        <img src={hoverInfo} className="cta-icon hover" />
                        <img src={activeInfo} className="cta-icon active" />
                        <h4>WHAT WE DO</h4>
                    </div>
                </a>

                <a href="#pricing-section">
                    <div className="cta">
                        <img src={staticTeam} className="cta-icon static" />
                        <img src={hoverTeam} className="cta-icon hover" />
                        <img src={activeTeam} className="cta-icon active" />
                        <h4>PRICING</h4>
                    </div>
                </a>

                <a href="#signup-section">
                    <div className="cta">
                        <img src={staticContact} className="cta-icon static" />
                        <img src={hoverContact} className="cta-icon hover" />
                        <img src={activeContact} className="cta-icon active" />
                        <h4>SIGN UP NOW</h4>
                    </div>
                </a>

                <a>
                    <div className="cta">
                        <img src={rightPadding} className="right-padding" />
                    </div>
                </a>

            </div>

            <div className="sections">

                <section id="covid-announcement" className="covid-alert">
                    <h1>
                        <AlertIcon></AlertIcon> COVID 19 Announcement
                    </h1>
                    <div className="section-content">
                        <p>Due to the recent covid-19 crisis, CRS is releasing early and for free.</p>
                        <p>See offer details <a href="#pricing-section">below!</a></p>
                    </div>
                </section>

                <div id="about">

                    <div className="joe-atp">
                        <div id="about-section"></div>
                        <img src={joeAtpLeft} className="joe-atp" />
                    </div>
                    <div className="tag-lines">
                        <h1>{whatWeDoInfo.whatWeDoTagline1}</h1>
                        <h1>{whatWeDoInfo.whatWeDoTagline2}</h1>
                        <h1>{whatWeDoInfo.whatWeDoTagline3}</h1>
                    </div>
                    <div className="what-we-do-textblock">{remark().use(reactRenderer).processSync(whatWeDoInfo.whatWeDoTextBlock).contents}</div>
                    <div className="promo-vid"><iframe className="promo-video-embed" src="https://player.vimeo.com/video/401140696?title=0&byline=0&portrait=0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

                </div>

                <section id="pricing-section">

                    <h1>Pricing</h1>

                    <div className="section-content">
                        <div className="pricing">

                            <div className="pricing-category">
                                <h2>Startup Fee</h2>
                                <div className="pricing-block">
                                    <h3>Features</h3>
                                    <ul className="features">
                                        <li>Intel RealSense &trade; Depth Sensor</li>
                                        <li>Ruggedized Sensor Mount</li>
                                    </ul>
                                    <h3 className="highlight">LIMITED TIME OFFER</h3>
                                    <p className="price-value">
                                        <span className="linethrough">$299.99</span>
                                        <span>$199.99</span>
                                    </p>
                                </div>
                            </div>

                            <div className="pricing-category">
                                <h2>Software Subscription</h2>
                                <div className="pricing-block">
                                    <h3>Features</h3>
                                    <ul className="features">
                                        <li>Clinical evaluation forms</li>
                                        <li>Work offline</li>
                                    </ul>
                                    <h3 className="highlight">LIMITED TIME OFFER</h3>
                                    <p className="price-value">
                                        <span className="linethrough">$89.99/mo/user</span>
                                        <span>FREE</span>
                                    </p>
                                    <p className="price-value">
                                        (free for the duration of covid-19 pandemic)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<section id="team">
                    <h1>The Team</h1>

                    <div className="section-content">
                        <div className="people">
                            {developers.map(p => personCard(p))}

                            <a className="hiring-card" href="https://complexrehabsystems.github.io/job-descriptions">
                                <h1>We're Hiring!</h1>
                                <p>Click Here to Learn More</p>
                                <AddPersonIcon className="social-icon"></AddPersonIcon>
                            </a>
                        </div>

                    </div>
                </section>*/}

                <section id="signup-section">
                    <h1>Support</h1>
                    <div className="section-content docs">
                        <p>Visit the CRS Documentation for detailed info on any topic.</p>
                        <ul>
                            <li><a href="/docs">User Manuals</a></li>
                            <li><a href="/docs">Video Tutorials</a></li>
                            <li><a href="/docs">FAQ</a></li>
                            <li><a href="/docs">Contact Us</a></li>
                        </ul>
                    </div>
                </section>

                <section id="signup-section" className="alternative-section">
                    <h1>{getInTouchInfo.sectionHeading}</h1>
                    <div className="section-content">
                        <SignupIcon className="signup-icon"></SignupIcon>
                        <h2 className="cta-tagline">{getInTouchInfo.tagline}</h2>
                        <h2 className="signup-success">{getInTouchInfo.successMessage}</h2>
                        <form id="signup" name="signup" method="POST" action="/?success" autoComplete="off" data-netlify="true" netlify>
                            <p className="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <input type="hidden" name="form-name" value="signup" />
                            <input name="organization" type="text" placeholder="organization inc." required />
                            <input name="email" type="email" placeholder="email@example.com" required />
                            <input type="submit" value={getInTouchInfo.buttonText.toUpperCase()} />
                        </form>

                    </div>
                </section>

            </div>
        </div>

        <Footer className="site-footer">
            <span>&copy; {footerInfo.copyright}</span>
            <span>{footerInfo.address}</span>
            <span><a href="/privacy">Privacy Policy</a></span>
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
          version
        }
      }
    }

    allFooterYaml {
      totalCount
      edges {
        node {
          copyright
          address
        }
      }
    }

    allWhatWeDoYaml {
      edges {
        node {
          sectionHeading
          whatWeDoTagline1
          whatWeDoTagline2
          whatWeDoTagline3
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
          codepen
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
          betaClosed
        }
      }
    }
  }
`
