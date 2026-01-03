import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-container1 ${props.rootClassName} `}>
      <section className="hero-thq-hero-itemly-elm hero-itemly">
        <div className="hero-thq-hero-content-wrapper-elm hero-content-wrapper">
          <div className="hero-left-content">
            <div className="hero-text-container">
              <h1 className="hero-main-heading">Find Your Lost School Items</h1>
              <p className="hero-subheading">
                Itemly helps students reunite with their lost belongings. Browse
                our database or report what you&apos;ve found.
              </p>
              <div className="hero-cta-buttons">
                <button className="hero-btn-primary">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
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
                  <span>Browse Lost Items</span>
                </button>
                <button className="hero-btn-secondary">
                  <span>Report Found Item</span>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m5 12l7-7l7 7m-7 7V5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-carousels-container">
            <div className="carousel-column carousel-down">
              <div className="carousel-track carousel-track-down">
                <div className="carousel-item">
                  <img
                    alt="Blue backpack"
                    src="https://images.pexels.com/photos/11463459/pexels-photo-11463459.png?auto=compress&amp;cs=tinysrgb&amp;w=1400"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Silver Apple Watch"
                    src="https://tse3.mm.bing.net/th/id/OIP.kWE7XLGeF711zNql9PvuUgHaHa?cb=ucfimg2&amp;ucfimg=1&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Aesthetic pencil pouch"
                    src="https://thumbs.dreamstime.com/b/pencil-case-filled-assorted-pencils-desk-ideal-creative-business-use-359392234.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Binder on desk"
                    src="https://thumbs.dreamstime.com/b/open-binder-detailed-business-plan-notes-structured-company-strategy-close-up-view-filled-documents-wooden-desk-333837268.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Notebook on desk 2"
                    src="https://static.vecteezy.com/system/resources/previews/002/130/373/non_2x/notebook-and-laptop-on-a-desk-free-photo.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Teddy bear in backpack"
                    src="https://images.pexels.com/photos/4887254/pexels-photo-4887254.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Black smartphone"
                    src="https://images.playground.com/11ec2cba-13c3-47b1-b5f1-5935f53cda48.jpeg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Black bottle"
                    src="https://img.freepik.com/premium-photo/black-water-bottle-is-sitting-rocks-mountains-style-sleek-metallic-finish_921860-54103.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Keys on floor"
                    src="https://thumbs.dreamstime.com/b/keys-wooden-floor-spacious-interior-large-windows-background-cluster-gleaming-metal-rests-rustic-softly-333223886.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Water bottle on grass"
                    src="https://tse4.mm.bing.net/th/id/OIP.MyEyFbtrP5CTq3HsKVJkTQHaFj?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Student with backpack"
                    src="https://images.pexels.com/photos/8617734/pexels-photo-8617734.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1400"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Project paper on desk"
                    src="https://as2.ftcdn.net/v2/jpg/07/65/34/47/1000_F_765344791_RwJIzI9gAWzFtUCUbb9OaVzHwuPOSNKx.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-column carousel-up">
              <div className="carousel-track-up carousel-track">
                <div className="carousel-item">
                  <img
                    alt="Blue-grey macbook"
                    src="https://tse1.mm.bing.net/th/id/OIP.bfQyNnj-MBBVQBvUt8bGTAHaE8?cb=ucfimg2&amp;ucfimg=1&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Hiking boots"
                    src="https://tse4.mm.bing.net/th/id/OIP.CLSyOMmteyR-T-U4FAmjugHaEJ?cb=ucfimg2&amp;ucfimg=1&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Backpack Black"
                    src="https://tse2.mm.bing.net/th/id/OIP.XIZ0eDCbWe_XZhD70OkFQwHaEJ?cb=ucfimg2&amp;ucfimg=1&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Soccer ball"
                    src="https://cdn.pixabay.com/photo/2017/09/23/11/43/football-2778583_1280.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Bat on ground"
                    src="https://img.freepik.com/premium-photo/baseball-bat-laying-ground-dirt_1013369-25274.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Phone on desk"
                    src="https://tse1.mm.bing.net/th/id/OIP.gghBxw736hym_FHcU1qojwHaE8?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Ipad on brick"
                    src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/wm/2024/06/ipad-air-m2-on-a-shelf-2.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Lunchbox"
                    src="https://tse3.mm.bing.net/th/id/OIP.2aAT6XG6saskjV6qSCK9igHaHa?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Glasses on desk"
                    src="https://img.freepik.com/free-photo/close-up-reading-glasses-office-desk_1252-793.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Winter hat on desk"
                    src="https://tse4.mm.bing.net/th/id/OIP.WzZdxinlXwKTET2pBjhMGAHaEK?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Backpack on grass"
                    src="https://img.freepik.com/premium-photo/school-backpack-green-grass_392895-374866.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    alt="Notebook on desk"
                    src="https://static.vecteezy.com/system/resources/thumbnails/001/911/424/small_2x/open-notebook-on-a-desk-photo.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stars"></div>
      </section>
      <div className="hero-container2">
        <div className="hero-container3">
          <Script
            html={`<style>
        @keyframes twinkle {0%,100% {opacity: 0.4;}
50% {opacity: 0.7;}}@keyframes scrollDown {0% {transform: translateY(0);}
100% {transform: translateY(-50%);}}@keyframes scrollUp {0% {transform: translateY(-50%);}
100% {transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  rootClassName: '',
}

Hero.propTypes = {
  rootClassName: PropTypes.string,
}

export default Hero
