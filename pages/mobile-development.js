import Layout from "../components/Layout";

const MobileDevelopment = () => {
  return (
    <Layout page="mobile-development">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; Mobile Development
                </div>
                <p>Design</p>
                <h2>
                  Mobile
                  <br />
                  Development
                </h2>
                <a className="btn btn_main btn_round" href="/book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-5">
                <img
                  className="w-100"
                  src="./assets/mobile-development/Mobile-Development-1.png"
                  alt="title-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_1 container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex">
              <div className="dot_img mt-5 pt-5">
                <img src="./assets/Dots.png" alt="dots" />
              </div>
              <div>
                <img
                  className="w-100"
                  src="./assets/mobile-development/Mobile-Development-2.gif"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <span>
                We design and create mobile applications with cutting-edge
                technologies, while focusing on our users’ experience.
              </span>
              <span>
                By prioritising usability, we produce mobile apps that are
                innovative, informative and easy to use.
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container">
          <h2>Our Process</h2>
          <div className="row mt-3">
            <div className="card_container col-md-3">
              <div className="card h-100">
                <div className="card_img_number w-100">
                  <img
                    src="./assets/mobile-development/01.png"
                    alt="number-01"
                  />
                </div>
                <p>Understanding Your Business Needs</p>
                <div>
                  <img
                    src="./assets/mobile-development/Group-1.png"
                    alt="group-1"
                  />
                </div>
                <span>
                  Quality application demands creative &amp; professional
                  inputs. By working and-in-hand together with you, it ensures
                  excellent execution throughout each part of the development
                  process.
                </span>
              </div>
            </div>
            <div className="card_container col-md-3">
              <div className="card h-100">
                <div className="card_img_number w-100">
                  <img
                    src="./assets/mobile-development/02.png"
                    alt="number-02"
                  />
                </div>
                <p>Strategy Implementation</p>
                <div>
                  <img
                    src="./assets/mobile-development/Group-2.svg"
                    alt="group-2"
                  />
                </div>
                <span>
                  Our team of experienced designers will turn your ideas into
                  reality with wireframes, user experience (UX) mapping,
                  transforming and creating graphical sections, branding assets,
                  and style guide.
                </span>
              </div>
            </div>
            <div className="card_container col-md-3">
              <div className="card h-100">
                <div className="card_img_number w-100">
                  <img
                    src="./assets/mobile-development/03.png"
                    alt="number-03"
                  />
                </div>
                <p>Creativity And Ideation</p>
                <div>
                  <img
                    src="./assets/mobile-development/Group-3.svg"
                    alt="group-3"
                  />
                </div>
                <span>
                  Developers step in to bring your ideas to life. Developing
                  databases, core logic, and dynamic screen behaviours ensures a
                  rapid, seamless and interactive experience for your users.
                </span>
              </div>
            </div>
            <div className="card_container col-md-3">
              <div className="card h-100">
                <div className="card_img_number w-100">
                  <img
                    src="./assets/mobile-development/04.png"
                    alt="number-04"
                  />
                </div>
                <p className="px-2">The Great Launch</p>
                <div>
                  <img
                    src="./assets/mobile-development/Group-4.svg"
                    alt="group-4"
                  />
                </div>
                <span>
                  Thorough and meticulous testing on all iPad, Android, and
                  iPhone app throughout the development process to ensure a
                  seamless mobile app experience. A series of QA test on app
                  performance and functionality takes place before submission.
                </span>
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

export default MobileDevelopment;
