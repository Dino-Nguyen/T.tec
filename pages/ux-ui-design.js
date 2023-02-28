import Layout from "../components/Layout";

const UxUiDesign = () => {
  return (
    <Layout page="ux-ui-design">
      <section>
        <div className="title_container">
          <div className="title container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="breadcrums">
                  <a href="/">Home </a>
                  &gt;
                  <a href="service"> Services </a>
                  &gt; UX/UI Design
                </div>
                <p>Design</p>
                <h2>
                  UX/UI
                  <br />
                  Design
                </h2>
                <a className="btn btn_main btn_round" href="book-now">
                  Book Now
                </a>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="./assets/ux-ui-design/UXUI-Design-1.png"
                  alt="title-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_1 container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex align-items-center">
              <div className="dot_img">
                <img src="./assets/Dots.png" alt="dots" />
              </div>
              <div>
                <img
                  className="w-100"
                  src="./assets/ux-ui-design/UXUI-Design-2.gif"
                  alt="section-1"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column">
              <span>
                We provide excellent UI/UX design services and produce
                interactive solutions to create the most intuitive websites and
                mobile application!
              </span>
              <span>
                At TESTEC, we believe that it is possible to create clutter-free
                interactive solutions and user experience.
              </span>
              <span>
                Our team of experienced designers will turn your ideas into
                reality with wireframes and user experience (UX) mapping,
                transforming and creating graphical sections, branding assets,
                and style guide.
              </span>
              <span>
                With the best team of developers renders interactive websites
                and applications, we provide the perfect first impression for
                users.
              </span>
            </div>
          </div>
        </div>
        <div className="section_2 container px-4">
          <h2>What we provide</h2>
          <div className="mt-2 row row-cols-1 row-cols-md-3 g-4">
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="px-5 text-center">
                  <img
                    className="card_img"
                    src="./assets/ux-ui-design/Card-image-1.png"
                    alt="card-img-1"
                  />
                </div>
                <div className="mb-3" />
                <div>
                  <p>Wireframes</p>
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="px-5 text-center">
                  <img
                    className="card_img"
                    src="./assets/ux-ui-design/Card-image-2.png"
                    alt="card-img-2"
                  />
                </div>
                <div className="mt-3">
                  <p className="m-0">Animation &amp; Logo Design</p>
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="px-5 text-center">
                  <img
                    className="card_img"
                    src="./assets/ux-ui-design/Card-image-3.png"
                    alt="card-img-3"
                  />
                </div>
                <div className="mb-3" />
                <div>
                  <p>Trend Forward Design</p>
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="px-5 text-center">
                  <img
                    className="card_img"
                    src="./assets/ux-ui-design/Card-image-4.png"
                    alt="card-img-4"
                  />
                </div>
                <div className="mb-3" />
                <div>
                  <p>Efficient Processes</p>
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="px-5 text-center">
                  <img
                    className="card_img"
                    src="./assets/ux-ui-design/Card-image-5.png"
                    alt="card-img-5"
                  />
                </div>
                <div>
                  <p>Prototypes</p>
                </div>
              </div>
            </div>
            <div className="card_container col-md-4">
              <div className="card h-100">
                <div className="px-5 text-center">
                  <img
                    className="card_img"
                    src="./assets/ux-ui-design/Card-image-6.png"
                    alt="card-img-6"
                  />
                </div>
                <div className="mb-3" />
                <div>
                  <p>Design Sprint</p>
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

export default UxUiDesign;
