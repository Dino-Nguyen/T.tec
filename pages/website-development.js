import Layout from "../components/Layout";

const WebsiteDevelopment = () => {
  return (
    <Layout page="website-development">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; Website Development
                </div>
                <p>Design</p>
                <h2>
                  Website
                  <br />
                  Development
                </h2>
                <a className="btn btn_main btn_round" href="book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="./assets/website-development/Website-Development-1.png"
                  alt="title-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_1 container mt-4 d-flex">
          <div className="dot_img">
            <img src="./assets/Dots.png" alt="dots" />
          </div>
          <div className="row">
            <div className="col-ms-12">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="text-center">
                    <img
                      src="./assets/website-development/Website-Development-2.gif"
                      alt="img-1"
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column">
                  <span>
                    The infrastructure we have at TESTEC helps us provide our
                    clients with unique, high quality and flexible web
                    solutions. With a creative and professional team, it allows
                    us to reliably ensure a timely delivery with all the
                    features and ideal functionalities in place.
                  </span>
                  <span>
                    With this, the client’s users will have easy access to
                    everything they need as soon as they visit the website.
                    Making their experiences seamless and convenient.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-ms-12">
              <div className="row align-items-center">
                <div className="col-md-6 d-flex flex-column">
                  <span>
                    When it comes to creating notable visibility and traffic
                    online, our experienced website developers leave nothing to
                    chance. They perform extensive research to sift through the
                    algorithms of some of the most popular brand sites and this
                    information is applied to help bolster your online presence.
                  </span>
                  <span>
                    The end result is a sophisticated and clutter-free website
                    that is optimised for smooth performance across all
                    platforms and devices.
                  </span>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <img
                      src="./assets/website-development/Website-Development-3.gif"
                      alt="img-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-ms-12">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="text-center">
                    <img
                      src="./assets/website-development/Website-Development-4.gif"
                      alt="img-3"
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex flex-column">
                  <span>
                    Our team works tirelessly to deliver you with all the best
                    web development solutions possible, for the growth of your
                    business. With quality in mind, we ensure your preferences
                    are an integral part of each and every decision we make
                    throughout the development process, making the final product
                    a flawless one.
                  </span>
                  <span>
                    Our websites have consistenly been proven as the perfect
                    stepping stones for brands to rapidly grow their businesses
                    while giving them a competitive edge in their respective
                    markets.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stay_connect_container container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Stay Connected
                <br />
                Get to know us, Say hello!
              </h2>
              <ul>
                <li>Mobile Development</li>
                <li>Website Development</li>
                <li>Enterprise Solutions</li>
                <li>Cloud Solutions</li>
                <li>UI/UX Design</li>
                <li>QA Testing</li>
                <li>Digital Marketing</li>
                <li>IT Consulting</li>
              </ul>
              <a className="btn btn_main btn_round" href="contact-us">
                Contact Us
              </a>
            </div>
            <div className="image_group col-md-6 d-flex">
              <div>
                <img
                  className="w-100"
                  src="./assets/Stay-Connected.png"
                  alt="stay-connect"
                />
              </div>
              <div className="dot_img pt-5">
                <img src="./assets/Dots.png" alt="dots" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact_container">
          <div className="contact container">
            <h2>
              Ready to turn
              <br />
              your ideas into reality?
            </h2>
            <p>
              Contact us now to know more on how you can leverage your business!
            </p>
            <a className="btn btn_main btn_round" href="contact-us">
              Contact Us
              <svg
                className="ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M5.49002 0.47998V2.91198H19.937L0.900024 23.0854L2.518 24.8L21.555 4.62654V19.936H23.85V0.47998H5.49002Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebsiteDevelopment;
