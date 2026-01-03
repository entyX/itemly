import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './how-it-works.css'

const HowItWorks = (props) => {
  return (
    <div className={`how-it-works-container1 ${props.rootClassName} `}>
      <div className="how-it-works-container2">
        <div className="how-it-works-container3">
          <Script
            html={`<style>
#lf-step-1 {
  animation: fadeInUpStagger 0.8s ease forwards 0.3s;
}
#lf-step-2 {
  animation: fadeInUpStagger 0.8s ease forwards 0.5s;
}
#lf-step-3 {
  animation: fadeInUpStagger 0.8s ease forwards 0.7s;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="HowItWorks"
        className="how-it-works-thq-lost-found-section-elm lost-found-section"
      >
        <div className="lf-container">
          <div className="lf-header">
            <h2 id="HowItWorksHeader" className="lf-headline">
              {props.lfHeadline ?? (
                <Fragment>
                  <span className="how-it-works-text15">
                    How Our Lost &amp; Found Works
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="lf-subtitle">
              {props.lfSubtitle ?? (
                <Fragment>
                  <span className="how-it-works-text19">
                    {' '}
                    Simple steps to report lost items or find what you are
                    looking for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="lf-steps-wrapper">
            <div id="lf-step-1" className="lf-step">
              <div className="lf-icon-wrapper">
                <div className="lf-icon-circle">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    className="lf-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="8"
                        y="2"
                        rx="1"
                        ry="1"
                        width="8"
                        height="4"
                      ></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="lf-step-content">
                <div className="lf-step-number">
                  <span>
                    {props.text ?? (
                      <Fragment>
                        <span className="how-it-works-text17">Step 1</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <h3 className="lf-step-title">
                  {props.lfStepTitle ?? (
                    <Fragment>
                      <span className="how-it-works-text23">
                        Report an Item
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="lf-step-description">
                  {props.lfStepDescription ?? (
                    <Fragment>
                      <span className="how-it-works-text18">
                        {' '}
                        Submit details about your lost or found item including
                        description, location, and date. Add photos to help
                        identify it quickly.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div id="lf-step-2" className="lf-step">
              <div className="lf-icon-wrapper">
                <div className="lf-icon-circle">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    className="lf-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="lf-step-content">
                <div className="lf-step-number">
                  <span>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="how-it-works-text16">Step 2</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <h3 className="lf-step-title">
                  {props.lfStepTitle1 ?? (
                    <Fragment>
                      <span className="how-it-works-text20">
                        Browse &amp; Search
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="lf-step-description">
                  {props.lfStepDescription1 ?? (
                    <Fragment>
                      <span className="how-it-works-text14">
                        {' '}
                        Search our database of lost and found items by category,
                        location, or keywords. Check regularly for new entries.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div id="lf-step-3" className="lf-step">
              <div className="lf-icon-wrapper">
                <div className="lf-icon-circle">
                  <svg
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    height="36"
                    viewBox="0 0 24 24"
                    className="lf-icon"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="lf-step-content">
                <div className="lf-step-number">
                  <span>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="how-it-works-text21">Step 3</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <h3 className="lf-step-title">
                  {props.lfStepTitle2 ?? (
                    <Fragment>
                      <span className="how-it-works-text22">
                        Claim Your Item
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="lf-step-description">
                  {props.lfStepDescription2 ?? (
                    <Fragment>
                      <span className="how-it-works-text13">
                        {' '}
                        Found your item? Contact the person who reported it
                        through our secure messaging system to arrange pickup.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="how-it-works-container4">
        <div className="how-it-works-container5">
          <Script
            html={`<style>
        @keyframes fadeInUp {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInUpStagger {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInArrow {from {opacity: 0;
transform: translateY(-50%) translateX(-10px);}
to {opacity: 0.7;
transform: translateY(-50%) translateX(0);}}@keyframes pulseArrow {0%,100% {opacity: 0.7;
transform: translateX(0);}
50% {opacity: 1;
transform: translateX(5px);}}@keyframes pulseArrowHover {0%,100% {transform: translateX(0);}
50% {transform: translateX(8px);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

HowItWorks.defaultProps = {
  lfStepDescription2: undefined,
  lfStepDescription1: undefined,
  lfHeadline: undefined,
  text1: undefined,
  text: undefined,
  lfStepDescription: undefined,
  lfSubtitle: undefined,
  lfStepTitle1: undefined,
  rootClassName: '',
  text2: undefined,
  lfStepTitle2: undefined,
  lfStepTitle: undefined,
}

HowItWorks.propTypes = {
  lfStepDescription2: PropTypes.element,
  lfStepDescription1: PropTypes.element,
  lfHeadline: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
  lfStepDescription: PropTypes.element,
  lfSubtitle: PropTypes.element,
  lfStepTitle1: PropTypes.element,
  rootClassName: PropTypes.string,
  text2: PropTypes.element,
  lfStepTitle2: PropTypes.element,
  lfStepTitle: PropTypes.element,
}

export default HowItWorks
