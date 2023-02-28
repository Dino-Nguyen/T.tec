import Layout from "../components/Layout";

const QATesting = () => {
  return (
    <Layout page="qa-testing">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; QA &amp; Testing
                </div>
                <p>User</p>
                <h2>
                  QA &amp;
                  <br />
                  Testing
                </h2>
                <a className="btn btn_main btn_round" href="book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-5">
                <img
                  className="w-100"
                  src="./assets/qa-testing/QA-_-Testing-1.png"
                  alt="title-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_1 container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex">
              <div className="dot_img">
                <img src="./assets/Dots.png" alt="dots" />
              </div>
              <div>
                <img
                  className="w-100"
                  src="./assets/qa-testing/QA-_-Testing-2.gif"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <span>
                Our team ensures that we deliver quality solutions to our
                clients with rigorous testings and analysis over our
                applications and solutions. We make it a point to use the most
                sophisticated methodologies of software testing to ensure
                everything is working and lives up to client’s expectation.
              </span>
              <span>
                With TESTEC, we use the latest techniques and platforms to
                deliver the utmost customer satisfaction.
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container">
          <div className="row align-items-center">
            <div className="discribe col-md-6">
              <h2>Full-Blown Testing On All Devices And Platforms</h2>
              <span>
                We provide multiple validation for every app section
                facilitating a smooth integration of different user interface
                sections using automated testing procedures.
              </span>
            </div>
            <div className="col-md-6 section_img">
              <img
                src="./assets/qa-testing/QA-_-Testing-3.png"
                alt="section-2"
              />
            </div>
          </div>
        </div>
        <div className="section_3 container">
          <div className="row align-items-center">
            <div className="col-md-6 section_img">
              <img
                src="./assets/qa-testing/QA-_-Testing-4.png"
                alt="section-3"
              />
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <div />
                  <span>
                    We test every feature on the software to ensure smooth
                    functioning
                  </span>
                </li>
                <li>
                  <div />
                  <span>
                    Our testing services take note of long-term implications of
                    changes in the configuration of software
                  </span>
                </li>
                <li>
                  <div />
                  <span>
                    Ensuring that the software does not cause issues due to the
                    previous iteration
                  </span>
                </li>
                <li>
                  <div />
                  <span>
                    We conduct browser testing with the most latest tools so
                    that your app is functional on multiple browsers.
                  </span>
                </li>
                <li>
                  <div />
                  <span>
                    Intensive testing to find out issues that are not easily
                    visible, but finding them nevertheless.
                  </span>
                </li>
                <li>
                  <div />
                  <span>
                    Analysing the software for adherence to user requirements
                    and other acceptance parameters.
                  </span>
                </li>
              </ul>
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

export default QATesting;
