import Layout from "../components/Layout";

const ITConsulting = () => {
  return (
    <Layout page="it-consulting">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; IT Consulting
                </div>
                <p>User</p>
                <h2>
                  IT
                  <br />
                  Consulting
                </h2>
                <a className="btn btn_main btn_round" href="book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-5">
                <img
                  className="w-100"
                  src="./assets/it-consulting/IT-Consulting-1.png"
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
              <div className="w-100">
                <img
                  className="w-100"
                  src="./assets/it-consulting/IT-Consulting-2.gif"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <span>
                Leading you in to the digital world with strategies consist of
                different agile methodologies.
              </span>
              <span>
                At TESTEC we have a great understanding of what makes things
                work. As a result, you will get the best guidance.
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-6 discribe">
              <div>
                <h2>Consulting Service</h2>
                <span>
                  Our consultants are certified and have experience and are the
                  perfect people to guide into the right direction.
                </span>
              </div>
              <div>
                <h2>Mentoring Services</h2>
                <span>
                  We provide mentoring services for start up in digitalisation.
                  We help the newer businesses take note of technological trends
                  that could benefit them in the long-run.
                </span>
              </div>
              <div>
                <h2>Enhance Operations</h2>
                <span>
                  We believe in having new options to enhance your ventures and
                  driving in revenue.
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img
                  className="w-100"
                  src="./assets/it-consulting/IT-Consulting-3.gif"
                  alt="section-2"
                />
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

export default ITConsulting;
