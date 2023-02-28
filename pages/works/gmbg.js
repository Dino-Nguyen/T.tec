import Layout from "../../components/Layout";

const Gmbg = () => {
  return (
    <Layout page="works/gmbg">
      <section>
        <div className="detail_container container">
          <div className="breadcrums">
            <a href="/">Home </a>
            &gt;
            <a href="/work"> Works </a>
            &gt; GMBG
          </div>
          <div className="detail_title_container d-flex align-items-center">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src="../assets/work/gmbg/Logo.png" alt="logo" />
                </div>
                <p className="mt-4">Grease Monkey Barber Garage</p>
                <h2>Service Booking Platform</h2>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="../assets/work/gmbg/GMBG-1.png"
                  alt="gmbg-1"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column">
            <h2>Challenges Faced</h2>
            <span>
              Grease Monkey Barber Garage is planning for a digital
              implementation of their business with aims to enhance their
              overall customer experience and increase their productivity.
            </span>
            <span>
              With this digital platform, they hope to be more efficient in the
              management of their employees and customer to ensure that their
              quality of their services are continually improving.
            </span>
            <span>
              The business follows a manual approach towards their business
              operations.
            </span>
            <p>The following processes are done manually:</p>
            <ul>
              <li>Customer database</li>
              <li>Assigning work to the individual barber</li>
              <li>Manpower management</li>
              <li>Inventory / stock management</li>
            </ul>
          </div>
          <div className="section_2 mt-5 pt-5">
            <h2>Solution</h2>
            <div>
              <p>An integrated haircut booking cum e-commerce application.</p>
              <div className="row align-items-center">
                <div className="col-md-7 d-flex flex-column">
                  <h3>Haircut Booking</h3>
                  <span>
                    The application serves as a platform for the customers to
                    book for a haircut appointment. Customers are able to browse
                    through all the different services being offered by the
                    business. They are able to select the barbers they would
                    like to be in charge of the services given. Using AR
                    technology, they are able to test out the different
                    hairstyles before committing to it.
                  </span>
                  <span>
                    Following the confirmation of the service booking, the work
                    will be assigned to the barbers and their schedule would be
                    updated to notify them of the booking. The barbers are able
                    to check the work assigned to them through the use of the
                    application.
                  </span>
                  <span>
                    After receiving the haircut, payment can be made digitally.
                    Customers are able to leave a feedback of the service
                    provided. They can upload videos and photographs of their
                    haircut onto the application.
                  </span>
                </div>
                <div className="col-md-5 position-relative">
                  <div className="section_img_1">
                    <img
                      src="../assets/work/gmbg/Ellipse-27-1.png"
                      alt="ellipse"
                    />
                  </div>
                  <div className="section_img_2">
                    <img
                      className="w-100"
                      src="../assets/work/gmbg/GMBG-2.png"
                      alt="gmbg-2"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <h3>E-commerce</h3>
                  <span>
                    Users are able to browse a catalogue of hair grooming
                    products sold by the business. Payment can be made through
                    the application itself.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2>Result</h2>
            <h3>Efficient Scheduling and Time Management</h3>
            <span>
              There would be an increase in terms of work efficiency as with the
              app. employees’ work can be tracked remotely. Thus, the owner is
              able to focus on other work related operations as time taken to
              complete certain tasks has been significantly reduced with the
              app. Scheduling is no longer a hassle as customers are able to pre
              book a service with their preferred barber which reduces the need
              of assigning work to the individual barber.
            </span>
            <h3 className="pt-3">Increased Revenue</h3>
            <span>
              With the implementation of e-commerce platform in the app, it
              brings in extra revenue from the sale of hair grooming products
              offered on the app. As the user use the app to book for services,
              they will look into the e-commerce page and some of them would
              purchase some of the products, thus increasing the revenue earn by
              the business.
            </span>
          </div>
        </div>
        <div className="home-our-service-container mt-5">
          <h2 className="home-our-service-h2">Our Services</h2>
          <div className="home-our-service-box id=">
            <a href="/mobile-development">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/mobile.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
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
            </a>
            <a href="/ux-ui-design">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/UXUI-Design.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
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
            </a>
            <a href="/it-consulting">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/image-296.png"
                  alt=""
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
                />
                <div className="home-our-service-item-text">
                  <div className="our-service-title">Business</div>
                  <h2>IT Consulting</h2>
                  <div className="our-service-inner-text">
                    Our consultants are certified with experience and are the
                    perfect people to guide your business into the right
                    direction
                  </div>
                </div>
              </div>
            </a>
            <a href="/qa-testing">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/QA-_-Testing.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
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
            </a>
            <a href="/digital-marketing">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/Digital-Marketing-1.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
                />
                <div className="home-our-service-item-text">
                  <div className="our-service-title">Business</div>
                  <h2>Digital Marketing</h2>
                  <div className="our-service-inner-text">
                    You will be able to notice increments in online conversions
                    to generating traffic on your websites, our marketing
                    campaign will definitely meet your business goals!
                  </div>
                </div>
              </div>
            </a>
            <a href="/cloud-solutions">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/image-296.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
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
            </a>
            <a href="/website-development">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/Website-Development-2.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
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
            </a>
            <a href="/enterprise-solutions">
              <div className="home-our-service-item">
                <img
                  className="home-our-service-item-img"
                  src="../assets/home/Enterprise-Solutions-1.png"
                />
                <img
                  className="rectangle"
                  src="../assets/home/Rectangle-5525.png"
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
            </a>
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
            <a className="btn btn_main btn_round" href="/contact-us">
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

export default Gmbg;
