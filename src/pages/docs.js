import React from "react"
import "../styles/layout.scss"

export default ({ data }) => {
  return <div className="layout docs" >
    <header>
      <h1> Complex Rehab Systems (CRS) Documentation &nbsp;
      <div className="small-link"><a href="/#top">back to site</a></div>
      </h1>
    </header>

    <div className="content">

      <div>
        <h1>User Manuals</h1>
    </div>

      <div>
        <h1>Video Tutorials</h1>
    </div>

      <div>
        <h1>FAQ</h1>
    </div>

      <div>
        <h1>Contact Us</h1>
    </div>
    </div>

  </div>
}