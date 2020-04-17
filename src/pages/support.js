import React from "react"
import "../styles/layout.scss"

export default ({ data }) => {
  return <div className="layout support" >
    <header>
      <h1> Complex Rehab Systems (CRS) Support &nbsp;
      <div className="small-link"><a href="/#top">back to site</a></div>
      </h1>
    </header>

    <div className="content">

      <div>
        <h1 id="user-manuals">User Manuals</h1>
        <ul>
          <li>
            <a href="/pdfs/QuickStartGuide_20200416-rev2.pdf">Quick Start Guide</a>
          </li>
          <li>
            <a href="/pdfs/DetailedUsageGuide_20200416.pdf">Detailed Usage Guide</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 id="video-tutorials">Video Tutorials</h1>
        <p><a href="https://vimeo.com/showcase/crs-tutorials" target="blank">View Video Tutorials on Vimeo</a></p>
        <div className="vimeo-showcase-embed-wrapper"><iframe src='https://vimeo.com/showcase/7006209/embed' allowfullscreen frameBorder='0' className="vimeo-showcase-embed-iframe"></iframe></div>
      </div>

      <div id="faq">
        <h1>FAQ</h1>
        <p>Coming soon!</p>
      </div>

      <div>
        <h1 id="contact-us">Contact Us</h1>
        <p>
          For additional help, our Tech Support Team can be reached
          during regular business hours by email or telephone:
        </p>
        <ul>
          <li>
            <b>Email:</b> <b>
              <a href="mailto:crs.support@kimobility.com">crs.support@kimobility.com</a>
            </b>
          </li>
          <li>
            <b>Phone:</b> (715) 997-9979
          </li>
        </ul>
        <p> Our technical support business hours are: <b>Monday – Friday, 8:00am – 5:00pm CST</b></p>
        <h1>Feedback</h1>
        <p>We want to hear from you!</p>
        <p>
          If you have any feedback to share about the app, including ideas for new features you can do so by emailing <a href="mailto:crs.support@kimobility.com">crs.support@kimobility.com</a>, or clicking
          the icon in the header of the CRS application.
        </p>
      </div>
    </div>
  </div>
}