import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import InfoIcon from "react-icons/lib/md/info-outline"
import MailIcon from "react-icons/lib/md/mail-outline"
import PeopleIcon from "react-icons/lib/md/people-outline"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"

export default () => 
<div className="layout">

  <Header className="site-header">
    <img src={logo} className="logo"/>
  </Header>

  <div className="content">
    <div className="ctas">
      <div className="cta">
        <InfoIcon className="cta-icon"/>
        <h4 className="cta-info">About CRS</h4>
      </div>
      <div className="cta">
        <MailIcon className="cta-icon"/>
        <h4 className="cta-info">Signup for E-Mail Updates</h4>
      </div>
      <div className="cta">
        <PeopleIcon className="cta-icon"/>
        <h4 className="cta-info">Meet the Team</h4>
      </div>
    </div>
  </div>

  <Footer className="site-footer">
    <span>contact info</span>
    <span>etc</span>
  </Footer>

</div>
