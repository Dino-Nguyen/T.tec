import Layout from "../components/Layout";

const CloudSolutions = () => {
  return (
    <Layout page="cloud-solutions">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; Cloud Solutions
                </div>
                <p>Solutions</p>
                <h2>
                  Cloud
                  <br />
                  Solutions
                </h2>
                <a className="btn btn_main btn_round" href="book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-5">
                <img
                  className="w-100"
                  src="./assets/cloud-solutions/Cloud-Solutions-1.png"
                  alt="title-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_1 container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex">
              <div className="dot_img pt-5">
                <img src="./assets/Dots.png" alt="dots" />
              </div>
              <div>
                <img
                  className="w-100"
                  src="./assets/cloud-solutions/Cloud-Solutions-2.gif"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6">
              <span>
                Cloud solutions has always been proven to help businesses scale
                new heights. At TESTEC, we provide outstanding cloud business
                solutions to prepare your business for the digital world. Grow
                and scale your business with our Cloud Solutions!
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container">
          <h2 className="ps-2">
            We provide Cloud Solutions tailored to your business needs
          </h2>
          <div className="mt-5 px-2">
            <div className="row">
              <div className="card_container col-md-4">
                <div className="card h-100">
                  <div className="card_img">
                    <img
                      className="w-100"
                      src="./assets/cloud-solutions/Group-1.png"
                      alt="group-1"
                    />
                  </div>
                  <div className="discribe">
                    <span>
                      To provide growth that helps businesses to improve
                      efficiently, we have the latest technology resources that
                      sets the benchmarks.
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_container col-md-4">
                <div className="card h-100">
                  <div className="card_img">
                    <img
                      className="w-100"
                      src="./assets/cloud-solutions/Group-2.png"
                      alt="group-2"
                    />
                  </div>
                  <div className="discribe">
                    <span>
                      With our cloud-technologies, businesses can be sure of
                      top-notch performance and quality. Our sophisticated
                      solutions enhance business productivity and profitability
                      .
                    </span>
                  </div>
                </div>
              </div>
              <div className="card_container col-md-4">
                <div className="card h-100">
                  <div className="card_img">
                    <img
                      className="w-100"
                      src="./assets/cloud-solutions/Group-3.png"
                      alt="group-3"
                    />
                  </div>
                  <div className="discribe">
                    <span>
                      Get the freedom to access all your services, databases and
                      apps directly from the web with our cloud solutions. Save
                      your hardware and additional server costs with our online
                      storage space.
                    </span>
                  </div>
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

export default CloudSolutions;
