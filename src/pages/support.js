import React from "react"
import "../styles/layout.scss"

export default ({ data }) => {
  return <div className="layout support" >
    <header>
      <h1> Complex Rehab Systems (CRS) Support &nbsp;
      <div className="small-link"><a href="/#top">back to CRS site</a></div>
      </h1>
    </header>

    <div className="content">

      <div>
        <h1 id="user-manuals">User Manuals</h1>
        <ul>
          <li>
            <a href="/pdfs/QuickStartGuide_20201208.pdf">Quick Start Guide</a>
          </li>
          <li>
            <a href="/pdfs/DetailedUsageGuide_20201208.pdf">Detailed Usage Guide</a>
          </li>
        </ul>
      </div>

      <div>
        <h1 id="video-tutorials">Video Tutorials</h1>
        <p><a href="https://vimeo.com/showcase/crs-tutorials" target="blank">View Video Tutorials on Vimeo</a></p>
        <div className="vimeo-showcase-embed-wrapper"><iframe src='https://vimeo.com/showcase/7006209/embed' allowfullscreen frameBorder='0' className="vimeo-showcase-embed-iframe"></iframe></div>
      </div>

        <div id='faq'>
          <h1>FAQs</h1>
          <h2>Frequently Asked Questions</h2>

          <dl>
            <dl className='faq-question'>1. What is CRS?</dl>
            <dt className='faq-answer'>
              The CRS App is designed for Seating Specialists working in Complex
              Rehab. CRS allows you to take a 3D scan of your client and “take
              them with you” for measurements or reference. The soGware also
              allows you to securely store and share client health information
              on a digital health record app.
            </dt>
            <dl className='faq-question'>
              2. What are the system requirements for CRS?
            </dl>
            <dt className='faq-answer'>
              <p className='faq-bullet-header'>
                <em>Apple compatibility to be added in the future</em>
              </p>
              <ul>
                <li>Windows 10 version 1809 (build 17763) </li>
                <li>2.5ghz dual core processor </li>
                <li>8 GB RAM </li>
                <li>Screen resolution of 1360x768 or greater</li>
              </ul>
            </dt>
            <dl className='faq-question'>
              3. What hardware do I need for CRS?
            </dl>
            <dt className='faq-answer'>
              <ul>
                <li>
                  Windows Tablet or Laptop that meets System Requirements
                  (previous question)
                </li>
                <li>Realsense (D435, D435i, D415) Camera</li>
                <li>CRS Mount for Realsense Camera</li>
                <li>USB Type-C cable</li>
              </ul>
            </dt>
            <dl className='faq-question'>4. Is CRS only for ATPs?</dl>
            <dt className='faq-answer'>
              The CRS App is designed for Seating Specialists working in complex
              rehab. This includes, but is not limited to, assistive technology
              providers, therapists and hospitals.
            </dt>
            <dl className='faq-question'>
              5. Is CRS available outside the US?
            </dl>
            <dt className='faq-answer'>
              Yes! CRS is available outside the United States and even offers
              the option to change measurement units to metric in the app
              settings. Please contact us for more information.
            </dt>
            <dl className='faq-question'>6. How do I get set up?</dl>
            <dt className='faq-answer'>
              Please contact us at crs.support@kimobility.com or 715-997-9979.
            </dt>
          </dl>
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