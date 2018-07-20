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

export default () => 
<div className="layout">

  <Header className="site-header">

    <img src={logo} className="logo"/>

    <div className="mission">
      <h3>The Future of Complex Rehab</h3>
      <h2>Building advanced tools for ATPs</h2>
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

            <div className="person">
              <img src={doug}/>
              <div className="overlay">
                <h1>Douglas Munsey</h1>
                <h2>President</h2>
                <div className="about">
                  <p>Douglas was an investment research associate at Morgan Stanley working in the medical technology sector.</p>
                  <p>He has a BBA in Finance, Investment, and Banking from the University of Wisconsin-Madison.</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/douglas-munsey-17407423/" target="_blank"><LinkedInIcon className="social-icon" /></a>
                </div>

              </div>
            </div>

            <div className="person">
              <img src={tom}/>
              <div className="overlay">
                <h1>Tom Whelan</h1>
                <h2>CTO</h2>
                <div className="about">
                  <p>Tom has nearly 30 years experience in the field of complex rehab, most recently as VP of Product Management at Ki Mobility.</p>
                  <p>Tom is also the Founder and President of WoundZoom, a start-up 3D imaging technology company.</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/tom-whelan-6957855/" target="_blank"><LinkedInIcon className="social-icon" /></a>
                </div>

              </div>
            </div>

            <!-- Add paul back at a later date
            <div className="person">
              <img src={avatar}/>
              <div className="overlay">
                <h1>Paul Banz</h1>
                <h2>Product Manager</h2>
                <div className="about">
                  <p>This is some information about paul.</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/paul-banz-806ba31/" target="_blank"><LinkedInIcon className="social-icon" /></a>
                </div>

              </div>
            </div> 
            -->
          </div>

          <h2>Developers</h2>
          <div className="people">

            <div className="person">
              <img src={daniel}/>
              <div className="overlay">
                <h1>Daniel Packard</h1>
                <h2>Developer</h2>
                <div className="about">
                  <p>With a diverse background in physics, math, robotics, and software - Daniel brings nearly ten years of experience to the table.</p>
                  <p>In his free time, he enjoys beer, guitar, and bicycles.</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://github.com/daniel-packard" target="_blank"><GithubIcon className="social-icon" /></a>
                  <a href="https://www.linkedin.com/in/daniel-packard-71715425/" target="_blank"><LinkedInIcon className="social-icon" /></a>
                </div>

              </div>
            </div>

            <div className="person">
              <img src={patrick}/>
              <div className="overlay">
                <h1>Patrick Abadi</h1>
                <h2>Developer</h2>
                <div className="about">
                  <p>An expert in mobile, desktop, and cloud development - Patrick has extensive experience in C/C++/C#/.NET/SQL.</p>
                  <p>Before joining CRS, Patrick was Founder and CTO of two successful software companies.</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://github.com/patrickabadi" target="_blank"><GithubIcon className="social-icon" /></a>
                  <a href="https://www.linkedin.com/in/implicitsoftware/" target="_blank"><LinkedInIcon className="social-icon" /></a>
                </div>

              </div>
            </div>

            <div className="person">
              <img src={jonathan}/>
              <div className="overlay">
                <h1>Jonathan Gilmore</h1>
                <h2>Developer</h2>
                <div className="about">
                  <p>Desktop, web, mobile, and cloud software development professional. Jonathan has extensive experience as a full-stack software engineer developing application on many different platforms.</p>
                  <p>Prior to joining CRS, Jonathan developed inspection algorithms for an automatic inspection machine vision system which was used in manufacturing facilities in the U.S. and abroad. </p>
                  <p>Jonathan has a Bachelor’s degree in Computer Science from Syracuse University</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://github.com/jgilmorekim" target="_blank"><GithubIcon className="social-icon" /></a>
                </div>

              </div>
            </div>

            <div className="person">
              <img src={hima}/>
              <div className="overlay">
                <h1>Hima Bharathi Adusumilli</h1>
                <h2>Developer</h2>
                <div className="about">
                  <p>Hima has graduated from University of Wisconsin-Madison with a degree in Computer Science and a minor in Mathematics.</p>
                  <p>Before joining CRS, Hima has worked on a Machine Learning project which is Defect Detection of Voids.</p>
                </div>
                
                <div className="social-icons">
                  <a href="https://github.com/HimaBharathi" target="_blank"><GithubIcon className="social-icon" /></a>
                  <a href="https://www.linkedin.com/in/hima-bharathi-adusumilli-b20064124/" target="_blank"><LinkedInIcon className="social-icon" /></a>
                </div>

              </div>
            </div>

            <div className="person">
              <img src={avatar}/>
              <div className="overlay">
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
