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
        <ul>
          <li>
            <a href="/pdfs/QuickStartGuide_20200416.pdf">Quick Start Guide</a>
          </li>
          <li>
            <a href="/pdfs/DetailedUsageGuide_20200416.pdf">Detailed Usage Guide</a>
          </li>
        </ul>
      </div>

      <div>
        <h1>Video Tutorials</h1>
        <p>(Embed coming soon...)</p>
      </div>

      <div>
        <h1>FAQ</h1>
        <p>Coming soon!</p>
      </div>

      <div>
        <h1>Contact Us</h1>
        <p>For additional help, our Tech Support Team can be reached during regular business hours by email or telephone:</p>
        <ul>
          <li>
            <b>Email:</b> <b><a href="mailto:crs.support@kimobility.com">crs.support@kimobility.com</a></b>
          </li>
          <li>
            <b>Phone:</b> (715) 997-9979
          </li>
        </ul>
        <p> Our technical support business hours are: <b>Monday – Friday, 8:00am – 5:00pm CST</b></p>
<h1>Feedback</h1>
We want to hear from you!
If you have any feedback to share about the app, including ideas for new features you can do so by emailing crs.support@kimobility.com, or clicking
the icon in the header of the CRS application.
      </div>
    </div>

  </div>
}