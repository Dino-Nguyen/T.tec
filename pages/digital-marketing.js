import Layout from "../components/Layout";

const DigitalMarketing = () => {
  return (
    <Layout page="digital-marketing">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; Digital Marketing
                </div>
                <p>Business</p>
                <h2>
                  Digital
                  <br />
                  Marketing
                </h2>
                <a className="btn btn_main btn_round" href="./book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="./assets/digital-marketing/Digital-Marketing-1.png"
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
                  src="./assets/digital-marketing/Digital-Marketing-2.png"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <span>
                We customise digital solutions for you to take your business to
                the next level. Having a great presence in the digital world
                today, your business will surely gain traction.
              </span>
              <span>
                Digital Marketing is no different from the technologies being at
                the front of all our services. You will be able to notice
                increments in online conversions to generating traffic on your
                websites, our marketing campaign will definitely meet your
                business goals!
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container px-4">
          <h2>What We Offer</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="img_group">
                  <img
                    id="img-1"
                    className="w-100"
                    src="./assets/digital-marketing/SEO-SMO.png"
                    alt="img-1"
                  />
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="img_group">
                  <img
                    id="img-2"
                    className="w-100"
                    src="./assets/digital-marketing/Cost-Friendly.png"
                    alt="img-2"
                  />
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="img_group">
                  <img
                    id="img-3"
                    className="w-100"
                    src="./assets/digital-marketing/App-Marketing.png"
                    alt="img-3"
                  />
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="img_group">
                  <img
                    id="img-4"
                    className="w-100"
                    src="./assets/digital-marketing/Content-Email-Marketing.png"
                    alt="img-4"
                  />
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="img_group">
                  <img
                    id="img-5"
                    className="w-100"
                    src="./assets/digital-marketing/Complete-Flexibility.png"
                    alt="img-5"
                  />
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="img_group">
                  <img
                    id="img-6"
                    className="w-100"
                    src="./assets/digital-marketing/Paid-Advertisement.png"
                    alt="img-6"
                  />
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

export default DigitalMarketing;
