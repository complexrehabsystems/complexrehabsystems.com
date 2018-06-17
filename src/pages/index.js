import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"

export default () => 
<div className="layout">

  <Header className="site-header">
    <img src={logo} className="logo"/>
  </Header>

  <div className="content">content</div>

  <Footer className="site-footer">
    <span>contact info</span>
    <span>etc</span>
  </Footer>

</div>
