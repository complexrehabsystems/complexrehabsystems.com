import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import InfoIcon from "react-icons/lib/md/info-outline"
import MailIcon from "react-icons/lib/md/mail-outline"
import PeopleIcon from "react-icons/lib/md/people-outline"
import LinkedInIcon from "react-icons/lib/fa/linkedin-square"
import AddPersonIcon from "react-icons/lib/fa/user-plus"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"
import signupImg from "../assets/about-crs2.jpg"

import daniel from "../assets/daniel.png"
import doug from "../assets/doug.png"
import patrick from "../assets/patrick.png"
import tom from "../assets/tom.jpg"
import avatar from "../assets/avatar.png"
import avatarAddUser from "../assets/avatarAddUser.jpg"

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
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

  <div className="content">

    <div className="ctas">

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
              <p> This is some information about douglas.</p>
              <LinkedInIcon className="social-icon"></LinkedInIcon>
            </div>
          </div>

          <div className="person">
            <img src={tom}/>
            <div className="overlay">
              <h1>Tom Whelan</h1>
              <p> This is some information about tom.</p>
              <LinkedInIcon className="social-icon"></LinkedInIcon>
            </div>
          </div>

          <div className="person">
            <img src={avatar}/>
            <div className="overlay">
              <h1>Paul Banz</h1>
              <p> This is some information about paul.</p>
              <LinkedInIcon className="social-icon"></LinkedInIcon>
            </div>
          </div>
        </div>

        <h2>Developers</h2>
        <div className="people">

          <div className="person">
            <img src={daniel}/>
            <div className="overlay">
              <h1>Daniel Packard</h1>
              <p> This is some information about daniel.</p>
              <LinkedInIcon className="social-icon"></LinkedInIcon>
            </div>
          </div>

          <div className="person">
            <img src={patrick}/>
            <div className="overlay">
              <h1>Patrick Abadi</h1>
              <p> This is some information about patrick.</p>
              <LinkedInIcon className="social-icon"></LinkedInIcon>
            </div>
          </div>

          <div className="person">
            <img src={avatar}/>
            <div className="overlay">
              <h1>Jonathan Gilmore</h1>
              <p> This is some information about jonathan.</p>
              <LinkedInIcon className="social-icon"></LinkedInIcon>
            </div>
          </div>

          <a href="https://complexrehabsystems.github.io/job-descriptions">
          <div className="person">
            <img src={avatarAddUser}/>
            <div className="overlay hiring">
              <h1>We're Hiring!</h1>
              <p className="lede">Click Here to Learn More</p>
              <AddPersonIcon className="social-icon"></AddPersonIcon>
            </div>
          </div>
          </a>

        </div>

      </section>
      <section id="signup">
        <h1>Sign Up Now</h1>
        <img src={signupImg}/>
        <h2>To Receive Email Updates about CRS and Our Products</h2>
        <form id="contact" name="contact" method="POST" data-netlify="true" netlify>
          <input type="email"/>
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
