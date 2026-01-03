import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div
      className={`features-thq-layout251-elm thq-section-padding ${props.rootClassName} `}
    >
      <div className="features-thq-max-width-elm thq-section-max-width">
        <div className="thq-flex-row features-thq-section-title-elm">
          <div className="features-thq-column-elm thq-flex-column">
            <h2 className="features-thq-text-elm thq-heading-2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features-text3">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="features-thq-content-elm1">
          <div className="features-thq-row-elm thq-flex-row">
            <div className="features-thq-feature1-elm thq-flex-column">
              <img
                alt={props.feature2ImageAlt1}
                src={props.feature2ImageSrc1}
                className="features-thq-feature2-image-elm1 thq-img-ratio-4-3"
              />
              <h3 className="features-thq-feature1-title-elm thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features-text4">Itemly Maps</span>
                  </Fragment>
                )}
              </h3>
              <div className="features-thq-content-elm2 thq-flex-column">
                <span className="features-thq-feature1-description-elm thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features-text6">
                        View all lost and found items on an interactive map.
                        Easily locate items near you and see where items were
                        found or lost in real-time.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features-thq-feature2-elm thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="features-thq-feature2-image-elm2 thq-img-ratio-4-3"
              />
              <h3 className="features-thq-feature2-title-elm thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features-text5">Advanced Catalog</span>
                  </Fragment>
                )}
              </h3>
              <div className="features-thq-content-elm3 thq-flex-column">
                <span className="features-thq-feature2-description-elm thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features-text7">
                        Fully responsive design that lets users browse all
                        available items and either request to claim them or ask
                        for additional information. Items are easy to find
                        through filtering or a direct search.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features-thq-feature3-elm thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="features-thq-feature3-image-elm thq-img-ratio-4-3"
              />
              <h3 className="features-thq-feature3-title-elm thq-heading-3">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features-text1">Easy Reporting</span>
                  </Fragment>
                )}
              </h3>
              <div className="features-thq-content-elm4 thq-flex-column">
                <span className="features-thq-feature3-description-elm thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features-text2">
                        Simple and intuitive reporting system for both lost and
                        found items with photo uploads, detailed descriptions,
                        and location tracking.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features-thq-actions-elm"></div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  feature3ImageSrc: '/adobe%20express%20-%20reporting%20(2)-300h.gif',
  feature3Title: undefined,
  feature3ImageAlt: 'PlaceholderImage1314',
  feature2ImageSrc1: '/adobe%20express%20-%20itemlymaps-1400w.gif',
  feature2ImageAlt: 'PlaceholderImage1314',
  feature3Description: undefined,
  feature2ImageSrc: '/adobe%20express%20-%20catalog-300h.gif',
  rootClassName: '',
  sectionTitle: undefined,
  feature1Title: undefined,
  feature2ImageAlt1: 'PlaceholderImage1314',
  feature2Title: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
}

Features.propTypes = {
  feature3ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2ImageSrc1: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImageAlt1: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features
