import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container1 ${props.rootClassName} `}>
      <nav className="itemly-navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="logo-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="navbar-icon10"
              >
                <path
                  d="M11.423 2.378a3 3 0 0 1 2.154 0l3.461 1.331c.58.223.962.78.962 1.4v7.78a1.5 1.5 0 0 1-.017.22a4.5 4.5 0 0 0-.983-2.44V5.11a.5.5 0 0 0-.321-.467l-3.461-1.331a2 2 0 0 0-1.436 0L8.32 4.642A.5.5 0 0 0 8 5.11v1.1a4 4 0 0 0-1 0v-1.1a1.5 1.5 0 0 1 .962-1.4zM12.6 9.089a1.5 1.5 0 0 0-.562-.38L8.577 7.378a3 3 0 0 0-2.154 0L2.962 8.709a1.5 1.5 0 0 0-.962 1.4v4.78a1.5 1.5 0 0 0 .962 1.4l3.46 1.331a3 3 0 0 0 2.155 0l1.944-.748a4.5 4.5 0 0 1-.712-.797l-1.591.612a2 2 0 0 1-1.436 0L3.32 15.356a.5.5 0 0 1-.32-.467v-4.78a.5.5 0 0 1 .32-.467l3.462-1.331a2 2 0 0 1 1.436 0l3.164 1.217a4.5 4.5 0 0 1 1.218-.439m-1.903.89a.5.5 0 0 0-.252.027L7.5 11.14l-2.946-1.133a.5.5 0 1 0-.359.934L7 12.018v2.49a.5.5 0 0 0 1 0v-2.49l1.496-.576a4.5 4.5 0 0 1 1.201-1.464m4.748-4.973a.5.5 0 1 1 .359.933l-2.766 1.064a1.5 1.5 0 0 1-1.077 0L9.195 5.94a.5.5 0 0 1 .36-.933L12.32 6.07a.5.5 0 0 0 .36 0zm.858 10.59a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.707zM16 13.498a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image"
            />
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#home">
                <div className="nav-link">
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.teleporthq.io">
                <div className="navbar-thq-nav-link-elm2 nav-link">
                  <span>How It Works</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#features">
                <div className="nav-link">
                  <span>Features</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#testimonials">
                <div className="nav-link">
                  <span>Testimonials</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navbar-actions">
            <button id="loginBtn" className="btn-login">
              <svg
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="12" cy="7"></circle>
                </g>
              </svg>
              <span>Login</span>
            </button>
            <button id="signupBtn" className="btn-signup">
              <svg
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </g>
              </svg>
              <span>Sign Up</span>
            </button>
          </div>
          <button id="mobileMenuToggle" className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="mobileNav" className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <a href="#home">
                <div className="mobile-nav-link">
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#how-it-works">
                <div className="mobile-nav-link">
                  <span>How It Works</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#features">
                <div className="mobile-nav-link">
                  <span>Features</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#testimonials">
                <div className="mobile-nav-link">
                  <span>Testimonials</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="mobile-nav-actions">
            <button className="btn-login-mobile">Login</button>
            <button className="btn-signup-mobile">Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="navbar-container2">
        <div className="navbar-container3">
          <Script
            html={`<script>
(function(){
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mobileNav = document.getElementById("mobileNav")

  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileNav.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active")
      mobileNav.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = mobileNav.contains(event.target)
    const isClickOnToggle = mobileMenuToggle.contains(event.target)

    if (!isClickInsideNav && !isClickOnToggle && mobileNav.classList.contains("active")) {
      mobileMenuToggle.classList.remove("active")
      mobileNav.classList.remove("active")
    }
  })

  // Button click handlers
  const loginBtn = document.getElementById("loginBtn")
  const signupBtn = document.getElementById("signupBtn")

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      console.log("Login clicked")
    })
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      console.log("Sign Up clicked")
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  imageSrc: '/logo-200h.png',
  rootClassName: '',
  imageAlt: 'image',
}

Navbar.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navbar
