import React from "react"
import Link from "gatsby-link"
import Header from "../components/header"
import Footer from "../components/footer"

import InfoIcon from "react-icons/lib/md/info-outline"
import MailIcon from "react-icons/lib/md/mail-outline"
import PeopleIcon from "react-icons/lib/md/people-outline"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

export default () => 
<div className="layout">

  <Header className="site-header">
    <img src={logo} className="logo"/>

    <div className="mission">
      <h1>The Future of Complex Rehab</h1>
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
      </section>
    </div>
  </div>

  <Footer className="site-footer">
    <span>contact info</span>
    <span>etc</span>
  </Footer>

</div>
