import React from "react"

import logo from "../assets/banner_logo.svg"

import "../styles/layout.scss"

export default () => 
<div className="layout">

  <header className="banner">
    <img src={logo} className="logo"/>

    <svg viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon strokeWidth="0" points="0 10, 10 0, 10 10"></polygon>
      <polygon strokeWidth="0" fill="#148fce" points="0 10.01, 0 8.5, 10.01 0, 10.01 1.5"></polygon>
    </svg>
  </header>

</div>
