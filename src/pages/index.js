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
import patrick from "../assets/patrick.png"
import tom from "../assets/tom.jpg"
import avatar from "../assets/avatar.png"

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
  window.addEventListener('scroll', function() {
    document.getElementById('top-link').style.opacity = (pageYOffset-800);
  });
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

    <div id="nav" className="ctas">

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

    </div>

    <div className="sections">
      <section id="about">
        <h1>About CRS</h1>
        <h2>(placeholder)</h2>
      </section>
      <section id="team">
        <h1>The Team</h1>

        <h2>Leadership</h2>
        <div className="people">

          <div className="person">
            <img src={doug}/>
            <div className="overlay">
              <h1>Douglas Munsey</h1>
              <h2>President</h2>
              <p>Douglas was an investment research associate at Morgan Stanley working in the medical technology sector.</p>
              <p>He has a BBA in Finance, Investment, and Banking from the University of Wisconsin-Madison.</p>
              
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
              <p> This is some information about tom.</p>
              
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/tom-whelan-6957855/" target="_blank"><LinkedInIcon className="social-icon" /></a>
              </div>

            </div>
          </div>

          <div className="person">
            <img src={avatar}/>
            <div className="overlay">
              <h1>Paul Banz</h1>
              <h2>Product Manager</h2>
              <p> This is some information about paul.</p>
              
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/paul-banz-806ba31/" target="_blank"><LinkedInIcon className="social-icon" /></a>
              </div>

            </div>
          </div>
        </div>

        <h2>Developers</h2>
        <div className="people">

          <div className="person">
            <img src={daniel}/>
            <div className="overlay">
              <h1>Daniel Packard</h1>
              <h2>Developer</h2>
              <p>With a diverse background in physics, math, robotics, and software - Daniel brings nearly ten years of experience to the table.</p>
              <p>In his free time, he enjoys beer, guitar, and bicycles.</p>
              
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
              <p> This is some information about patrick.</p>
              
              <div className="social-icons">
                <a href="https://github.com/patrickabadi" target="_blank"><GithubIcon className="social-icon" /></a>
                <a href="https://www.linkedin.com/in/implicitsoftware/" target="_blank"><LinkedInIcon className="social-icon" /></a>
              </div>

            </div>
          </div>

          <div className="person">
            <img src={avatar}/>
            <div className="overlay">
              <h1>Jonathan Gilmore</h1>
              <h2>Developer</h2>
              <p> This is some information about jonathan.</p>
              
              <div className="social-icons">
                <a href="https://github.com/jgilmorekim" target="_blank"><GithubIcon className="social-icon" /></a>
                <a href="https://www.linkedin.com/in/daniel-packard-71715425/" target="_blank"><LinkedInIcon className="social-icon" /></a>
              </div>

            </div>
          </div>

          <div className="person">
            <img src={avatar}/>
            <div className="overlay">
              <h1>Hima Bharathi Adusumilli</h1>
              <h2>Developer</h2>
              <p> This is some information about hima.</p>
              
              <div className="social-icons">
                <a href="https://github.com/daniel-packard" target="_blank"><GithubIcon className="social-icon" /></a>
                <a href="https://www.linkedin.com/in/daniel-packard-71715425/" target="_blank"><LinkedInIcon className="social-icon" /></a>
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

      </section>

      <section id="signup">
        <h1>Sign Up Now</h1>
        <img src={signupImg}/>
        <h2>To Receive Email Updates about CRS and Our Products</h2>
        <form id="contact" name="contact" method="POST" action="/" data-netlify="true" netlify>
          <input name="email" type="email" required/>
          <input type="submit" value="Signup Now"/>
        </form>
      </section>

    </div>
  </div>

  <Footer className="site-footer">
    <span>&copy; Complex Rehab Systems 2018</span>
    <span>1348 Westmore Court - Stevens Point, WI, USA - 54481</span>
  </Footer>

</div>
