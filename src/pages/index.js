import React from "react"
import Header from "../components/header"

import "../styles/layout.scss"

import logo from "../assets/banner_logo.svg"

export default () => 
<div className="layout">
  <Header>
    <img src={logo} className="logo"/>
  </Header>

</div>
