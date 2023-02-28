import Layout from "../components/Layout";

const EnterpriseSolutions = () => {
  return (
    <Layout page="enterprise-solutions">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; Enterprise Solutions
                </div>
                <p>Solutions</p>
                <h2>
                  Enterprise
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
                  src="./assets/enterprise-solutions/Enterprise-Solutions-1.png"
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
                  src="./assets/enterprise-solutions/Enterprise-Solutions-2.gif"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6 discribe">
              <span>
                Digital communication is taking on new importance for business.
                Our team makes sure that you are always ready with our
                enterprise mobility solutions to take up new challenges and
                adapt quickly.
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container">
          <h2 className="ps-3">Grow Beyond</h2>
          <div className="section_img_container container mt-5 px-4">
            <div className="row">
              <div className="col-md-4">
                <div className="section_img">
                  <img
                    className="w-100"
                    src="./assets/enterprise-solutions/Image-1.png"
                    alt="image-1"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="img_2 px-4 py-3">
                  <img
                    className="w-100"
                    src="./assets/enterprise-solutions/Image-2.png"
                    alt="image-2"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="section_img">
                  <img
                    className="w-100"
                    src="./assets/enterprise-solutions/Image-3.png"
                    alt="image-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_3 container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <img
                className="w-100"
                src="./assets/enterprise-solutions/Group-Img-1.png"
                alt="group-img-1"
              />
              <img
                className="w-100"
                src="./assets/enterprise-solutions/Group-Img-2.png"
                alt="group-img-2"
              />
            </div>
            <div className="col-md-3 pt-5">
              <img
                className="w-100"
                src="./assets/enterprise-solutions/Group-Img-3.png"
                alt="group-img-3"
              />
              <img
                className="w-100"
                src="./assets/enterprise-solutions/Group-Img-4.png"
                alt="group-img-4"
              />
            </div>
            <div className="col-md-5 discribe pt-5">
              <h2>Start With Us</h2>
              <span>
                Digital communication is taking on new importance for business.
                Our team makes sure that you are always ready with our
                enterprise mobility solutions to take up new challenges and
                adapt quickly.
              </span>
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

export default EnterpriseSolutions;
