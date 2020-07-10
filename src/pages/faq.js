import React from 'react';
import '../styles/layout.scss';
import logo from '../assets/logo_dark.png';

export default ({ data }) => {
  return (
    <div className='layout support'>
      <div className='content'>
      <div className='logo-mission'>
        <img src={logo} className='faq-logo' />
      </div>

        <div id='faq'>
          <div className="faq-headers">
            <h1>FAQs</h1>
            <h2>Frequently Asked Questions</h2>
          </div>

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
      </div>
    </div>
  );
};
