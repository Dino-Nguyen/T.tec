import Layout from "../components/Layout";

const Service = () => {
  return (
    <Layout page="service">
      <div class="service-page">
        <img className="service-banner" src="./assets/services/Services.png" />
        <section className="services-container">
          <div className="services-box-1">
            <div className="float">
              <a href="/digital-marketing" className="services-item">
                <div className="services-title">BUSINESS</div>
                <div className="services-text">
                  Digital <br /> Marketing
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/mobile-development" className="services-item">
                <div className="services-title">DESIGN</div>
                <div className="services-text">
                  Mobile <br /> Development
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/website-development" className="services-item">
                <div className="services-title">DESIGN</div>
                <div className="services-text">
                  Website <br /> Development
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/cloud-solutions" className="services-item">
                <div className="services-title">SOLUTIONS</div>
                <div className="services-text">
                  Cloud <br /> Solutions
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/enterprise-solutions" className="services-item">
                <div className="services-title">SOLUTIONS</div>
                <div className="services-text">
                  Enterprise
                  <br /> Solutions
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/ux-ui-design" className="services-item">
                <div className="services-title">DESIGN</div>
                <div className="services-text">
                  UX/UI <br /> Design
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/qa-testing" className="services-item">
                <div className="services-title">USER</div>
                <div className="services-text">
                  QA &amp;
                  <br /> Testing
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
              <a href="/it-consulting" className="services-item">
                <div className="services-title">USER</div>
                <div className="services-text">
                  IT
                  <br /> Consulting
                </div>
                <img src="./assets/Link-arrow-b.png" />
              </a>
            </div>
          </div>
          <div className="services-box-2">
            <p className="services-box-2-title">OUR SERVICES</p>
            <div>
              <img src="./assets/services/Digital marketing.png" />
            </div>
            <div>
              <img src="./assets/services/Mobile development.png" />
            </div>
            <div>
              <img src="./assets/services/Website development.png" />
            </div>
            <div>
              <img src="./assets/services/Cloud solutions.png" />
            </div>
            <div>
              <img src="./assets/services/Enterprise.png" />
            </div>
            <div>
              <img src="./assets/services/UXUI.png" />
            </div>
            <div>
              <img src="./assets/services/QA.png" />
            </div>
            <div>
              <img src="./assets/services/IT.png" />
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
                      className="book-btn-center contact-us "
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

export default Service;
