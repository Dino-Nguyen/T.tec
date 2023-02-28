import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React,{Component} from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
// import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Layout from "../components/Layout";

const Home = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // }
  return (
    <Layout page="home">
      <div className="home-container">
        <section>
           <div className="slide-container-1">
           <div className="slide-title">Website Development </div>
            <div className="slide-title">Mobile Development </div>
            <div className="slide-title">Digital Marketing </div>
           </div>
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className="slide-container-2"
          >
            <div className="slide-title">Website Development </div>
            <div className="slide-title">Mobile Development </div>
            <div className="slide-title">Digital Marketing </div>
          </Carousel>

          <section className="home-banner">
            <div>
              <img src="./assets/home/home-side.gif" />
            </div>
            <div className="home-banner-center">
              <div>
                <img src="./assets/home/home.gif" />
                <div className="home-banner-center-text">
                  <h2>Providing The Next Level Tech</h2>
                  <div>
                    <a href="/book-now">
                      <span className="book-btn-center">
                        <span id="book-btn-center">
                          Book Now
                          <img src="./assets/Link-arrow.png" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="./assets/home/home-side.gif" />
            </div>
          </section>
          <div className="slide-container-1">
              <div className="slide-title">Cloud Solutions </div>
               
               <div className="slide-title">QA &amp; Testing </div>
             
               <div className="slide-title">UX/UI Design </div>
            
               <div className="slide-title">Enterprise Solutions </div>
          </div>
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className="slide-container-2"
          >
            
                  <div className="slide-title">Cloud Solutions </div>
               
                  <div className="slide-title">QA &amp; Testing </div>
                
                  <div className="slide-title">UX/UI Design </div>
               
                  <div className="slide-title">Enterprise Solutions </div>
               
          </Carousel>
        </section>

        <section className="home-about-container">
          <div className="home-about-container-item text-box">
            <div>
              <div>
                <h2>
                  About <br />
                  Tes tec
                </h2>
              </div>
            </div>
            <div>
              <div className="home-about-text">
                We deliver intelligent digital strategy with a thoughtful
                approach to enhance users’ experiences.
              </div>
            </div>
            <div>
              <div>
                <div>
                  <a href="/about">
                    <span className="book-btn-center learn-more">
                      <span id="book-btn-center">
                        Learn More
                        <img src="./assets/Link-arrow.png" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="home-about-img-box"
            src="./assets/home/about-testec.png"
          />
        </section>
        <section className="home-our-team-container">
          <div className="home-our-team-container-item">
            <div>
              <div>
                <div>
                  <div>
                    <h2>Our Team</h2>
                  </div>
                </div>
                <div>
                  <div className="home-about-text">
                    <p>
                      In our working process, we produce works that have high
                      usability and functionality. Our team possesses unique
                      individuality, strong skillsets, and can easily translate
                      something abstract and visionary into a digital
                      experience. Regardless of how challenging the tasks are,
                      we consistently prioritise our clients' needs first.
                    </p>
                    <p>
                      To promote productive collaboration, our team places a
                      high importance on respect, trust, and care for one
                      another.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="home-our-team-container-item2">
            <div className="home-our-team-box">
              <div>
                <img src="./assets/home/STRATEGIST TEAM.png" />
              </div>
              <div>
                <h2 className="our-team-title">Strategist Team</h2>
              </div>
              <span>Certified Consultants</span>
              <span>Project Managers </span>
              <span>Product Specialist</span>
            </div>
            <div className="home-our-team-box">
              <div>
                <img src="./assets/home/TECHNOLOGY TEAM.png" />
              </div>
              <div>
                <h2 className="our-team-title">Technology Team </h2>
              </div>
              <span>Front/Back-end Engineers</span>
              <span>Scrum master </span>
              <span>Architect</span>
              <span>QA Tester</span>
            </div>
            <div className="home-our-team-box">
              <div>
                <img src="./assets/home/CREATIVE TEAM.png" />
              </div>
              <div>
                <h2 className="our-team-title">Creative team</h2>
              </div>
              <span>UI Designer </span>
              <span>UX Analyst</span>
              <span>Digital Marketer</span>
              <span>Digital Content Editor</span>
            </div>
            <div className="home-our-team-box">
              <div>
                <img src="./assets/home/SUPPORT TEAM.png" />
              </div>
              <div>
                <h2 className="our-team-title">Support Team</h2>
              </div>
              <span>Customer Care officer</span>
              <span>System Administrator</span>
              <span>Maintenance Officer</span>
            </div>
          </section>
        </section>
        <section className="home-our-service-container">
          <h2 className="home-our-service-h2">
            Our <br /> Services
          </h2>
          <div className="home-our-service-box " id="style-4">
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/mobile.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Design</div>
                <h2>Mobile Development</h2>
                <div className="our-service-inner-text">
                  We design and create mobile applications with cutting-edge
                  technologies, while focusing on our users’ experience.
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/UXUI-Design.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Design</div>
                <h2>UX/UI Design</h2>
                <div className="our-service-inner-text">
                  We provide excellent UI/UX design services and produce
                  interactive solutions to create the most intuitive websites
                  and mobile application!
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/image-296.png"
                alt=""
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Business</div>
                <h2>IT Consulting</h2>
                <div className="our-service-inner-text">
                  Our consultants are certified with experience and are the
                  perfect people to guide your business into the right direction
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/QA-_-Testing.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">User</div>
                <h2>QA &amp; Testing</h2>
                <div className="our-service-inner-text">
                  Our team ensures that we deliver quality solutions to our
                  clients with rigorous testings and analysis over our
                  applications and solutions.
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/Digital-Marketing-1.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Business</div>
                <h2>Digital Marketing</h2>
                <div className="our-service-inner-text">
                  You will be able to notice increments in online conversions to
                  generating traffic on your websites, our marketing campaign
                  will definitely meet your business goals!
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/image-296.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Solution</div>
                <h2>Cloud Solution</h2>
                <div className="our-service-inner-text">
                  Get the freedom to access all your services, databases and
                  apps directly from the web with our cloud solutions.
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/Website-Development-2.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Design</div>
                <h2>Website Development</h2>
                <div className="our-service-inner-text">
                  Our websites have consistenly been proven as the perfect
                  stepping stones for brands to rapidly grow their businesses
                  while giving them a competitive edge in their respective
                  markets.
                </div>
              </div>
            </div>
            <div className="home-our-service-item">
              <img
                className="home-our-service-item-img"
                src="./assets/home/Enterprise-Solutions-1.png"
              />
              <img
                className="rectangle"
                src="./assets/home/Rectangle-5525.png"
              />
              <div className="home-our-service-item-text">
                <div className="our-service-title">Solution</div>
                <h2>Enterprise Solution</h2>
                <div className="our-service-inner-text">
                  Digital communication is taking on new importance for
                  business. Our team makes sure that you are always ready with
                  our enterprise mobility solutions to take up new challenges
                  and adapt quickly.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-ready-container">
          <div className="home-ready-box">
            <h2 id="home-ready-box-h2">
              Ready to turn
              <br /> your ideas into reality?
            </h2>
            <div className="home-ready-box-text" id="home-ready-box-text">
              Contact us now to know more on how you can leverage your business!
            </div>
            <div>
              <div>
                <div>
                  <a href="/contact-us">
                    <span
                      className="book-btn-center contact-us"
                      id="contact-us"
                    >
                      <span id="contact-us-btn">
                        Contact Us <img src="./assets/Link-arrow.png" />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
