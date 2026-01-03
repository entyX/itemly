import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import HowItWorks from '../components/how-it-works'
import Features from '../components/features'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './index.css'

const Index = (props) => {
  return (
    <div className="index-container1">
      <Helmet>
        <title>Rundown Fair Salmon</title>
        <meta property="og:title" content="Rundown Fair Salmon" />
        <link
          rel="canonical"
          href="https://rundown-fair-salmon-sclc8x.teleporthq.app/"
        />
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name1"></Navbar>
      <Hero rootClassName="heroroot-class-name2"></Hero>
      <HowItWorks
        text={
          <Fragment>
            <span className="index-text10">Step 1</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="index-text11">Step 2</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="index-text12">Step 3</span>
          </Fragment>
        }
        lfHeadline={
          <Fragment>
            <span className="index-text13">How Our Lost &amp; Found Works</span>
          </Fragment>
        }
        lfSubtitle={
          <Fragment>
            <span className="index-text14">
              {' '}
              Simple steps to report lost items or find what you are looking for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        lfStepTitle={
          <Fragment>
            <span className="index-text15">Report an Item</span>
          </Fragment>
        }
        lfStepTitle1={
          <Fragment>
            <span className="index-text16">Browse &amp; Search</span>
          </Fragment>
        }
        lfStepTitle2={
          <Fragment>
            <span className="index-text17">Claim Your Item</span>
          </Fragment>
        }
        rootClassName="how-it-worksroot-class-name"
        lfStepDescription={
          <Fragment>
            <span className="index-text18">
              {' '}
              Submit details about your lost or found item including
              description, location, and date. Add photos to help identify it
              quickly.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        lfStepDescription1={
          <Fragment>
            <span className="index-text19">
              {' '}
              Search our database of lost and found items by category, location,
              or keywords. Check regularly for new entries.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        lfStepDescription2={
          <Fragment>
            <span className="index-text20">
              {' '}
              Found your item? Contact the person who reported it through our
              secure messaging system to arrange pickup.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
      ></HowItWorks>
      <Features
        sectionTitle={
          <Fragment>
            <span className="index-text21">Discover the Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="index-text22">Itemly Maps</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="index-text23">Advanced Catalog</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="index-text24">Easy Reporting</span>
          </Fragment>
        }
        rootClassName="featuresroot-class-name"
        feature1Description={
          <Fragment>
            <span className="index-text25">
              View all lost and found items on an interactive map. Easily locate
              items near you and see where items were found or lost in
              real-time.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="index-text26">
              Fully responsive design that lets users browse all available items
              and either request to claim them or ask for additional
              information. Items are easy to find through filtering or a direct
              search.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="index-text27">
              Simple and intuitive reporting system for both lost and found
              items with photo uploads, detailed descriptions, and location
              tracking.
            </span>
          </Fragment>
        }
      ></Features>
      <Testimonial rootClassName="testimonialroot-class-name"></Testimonial>
      <Footer
        link1={
          <Fragment>
            <span className="index-text28">How to Report an Item</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="index-text29">How to Claim an Item</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="index-text30">
              Notifications aren&apos;t Working
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="index-text31">
              Achievements aren&apos;t Loading
            </span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="index-text32">444-444-4444</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="index-text33">itemlysupport@itemly.com</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="index-text34">
              6741 677nd PL N Seattle, WA 676941
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="index-text35">Subscribe</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="index-text36">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="index-text37">© 2026 Itemly</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="index-text38">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="index-text39">Cookie Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="index-text40">Privacy Policy</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="index-text41">Help Center</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="index-text42">Contact List</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
        socialLinkTitleCategory={
          <Fragment>
            <span className="index-text43">Follow Us</span>
          </Fragment>
        }
      ></Footer>
      <a href="https://play.teleporthq.io/signup" className="index-link">
        <div aria-label="Sign up to TeleportHQ" className="index-container2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="index-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="index-text44">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Index
