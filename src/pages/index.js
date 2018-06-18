import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import InfoIcon from "react-icons/lib/md/info-outline"
import MailIcon from "react-icons/lib/md/mail-outline"
import PeopleIcon from "react-icons/lib/md/people-outline"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"
import signupImg from "../assets/about-crs2.jpg"

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
      </section>
      <section id="team">
        <h1>Meet the Team</h1>
      </section>
      <section id="signup">
        <h1>Sign Up Now</h1>
        <img src={signupImg}/>
        <h2>To Receive Email Updates about CRS and Our Products</h2>
        <form id="email-signup-form">
          <input type="email"/>
          <input type="submit" value="Signup Now"/>
        </form>
      </section>
    </div>
  </div>

  <Footer className="site-footer">
    <span>contact info</span>
    <span>etc</span>
  </Footer>

</div>
