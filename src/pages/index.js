import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import FaEnvelope from "react-icons/lib/fa/envelope-o"

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
        <FaEnvelope className="cta-icon"/>
        <h4 className="cta-info">Signup for E-Mail Updates</h4>
      </div>
      <div className="cta">
        <FaEnvelope className="cta-icon"/>
        <h4 className="cta-info">Signup for E-Mail Updates</h4>
      </div>
      <div className="cta">
        <FaEnvelope className="cta-icon"/>
        <h4 className="cta-info">Signup for E-Mail Updates</h4>
      </div>
    </div>
  </div>

  <Footer className="site-footer">
    <span>contact info</span>
    <span>etc</span>
  </Footer>

</div>
