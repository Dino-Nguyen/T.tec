import Layout from "../../components/Layout";

const Evergrowth = () => {
  return (
    <Layout page="works/evergrowth">
      <section>
        <div className="detail_container container">
          <div className="breadcrums">
            <a href="/">Home </a>
            &gt;
            <a href="/work"> Works </a>
            &gt; Evergrowth
          </div>
          <div className="detail_title_container d-flex align-items-center">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src="../assets/work/evergrowth/Logo.png" alt="logo" />
                </div>
                <p className="mt-4">Evergrowth Partners Pte Ltd</p>
                <h2>Accounting Platform</h2>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="../assets/work/evergrowth/Evergrowth-1.png"
                  alt="evergrowth-1"
                />
              </div>
            </div>
          </div>
          <div className="section_1 mt-5">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <div className="w-100 text-center">
                  <img
                    src="../assets/work/evergrowth/Evergrowth-2.png"
                    alt="section_img"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2>Challenges Faced</h2>
                <div className="d-flex flex-column">
                  <span>
                    Evergrowth Partners Pte Ltd intends to make technological
                    advancement to increase the efficiency of the company and to
                    assist their clients. They wish to craft a brand new company
                    website that can cater to the technological advancement
                  </span>
                  <span>
                    Work process is at the minimal in terms of digitalization as
                    most of it is being done manually. With the work being done
                    manually, making human errors are inevitable. This also
                    results in the man-hours being heavy and time consuming.
                  </span>
                </div>
                <p>The following processes are done manually:</p>
                <ul>
                  <li>Administration</li>
                  <li>Data Entry</li>
                  <li>Client’s information and necessary data capture</li>
                  <li>
                    Scheduling of appointments, reminders and follow up with and
                    for clients
                  </li>
                  <li>Manage payment, taxation and finance related matters</li>
                  <li>Secretarial admistration work</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section_2 mt-5 pt-5">
            <h2>Solution</h2>
            <div>
              <p>
                The mobile application and web systems aids in the streamlining
                of the operations of the business and therefore, yielding
                maximum output from our existing resources.
              </p>
              <div className="row">
                <div className="col-md-8 d-flex flex-column">
                  <h3>Mobile Application</h3>
                  <span>
                    The app serves as a platform for the customers’ access to
                    upload necessary information required by the business for
                    the execution of the services. Reminders can be send out to
                    the users to remind them about uploading the required
                    information.
                  </span>
                  <span>
                    The app allows an increase in transparency of the project as
                    all the data are all presented. It also allow the documents
                    to be easily accessible by both the client and the business
                  </span>
                  <span>
                    There are a variety of tools that can be used by the
                    customers to view the data. This includes Data Analytics and
                    Data Projection tools.
                  </span>
                  <span>
                    System are also able to generate reports which customers are
                    able to select from which date to which dates to track their
                    finances. The app also present the statistics using
                    infographics so data can be easily interpreted.
                  </span>
                </div>
                <div className="col-md-4 position-relative">
                  <div className="section_img_1">
                    <img
                      src="../assets/work/evergrowth/Ellipse-27.png"
                      alt="ellipse"
                    />
                  </div>
                  <div className="section_img_2">
                    <img
                      className="w-100"
                      src="../assets/work/evergrowth/Evergrowth-3.png"
                      alt="section_img"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <h3>Web System</h3>
                  <div className="d-flex flex-column">
                    <span>
                      Web system are used by admin to primarily overlook the
                      business operations. They are able to view all of the
                      organizations through the web system.
                    </span>
                    <span>
                      Through the system, admins are able to send out forms to
                      clients to request for e-signature and also send out
                      reminders to them to obtain required information.
                    </span>
                    <span>
                      The use of the system to manage the important documents
                      send by the client through cloud storage and template
                      management system.
                    </span>
                    <span>
                      Stats feature of the web panel will provide data analytics
                      and data projection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2>Result</h2>
            <h3>Quality Control</h3>
            <span>
              The chances of errors are reduced by five times as the systems
              takes control of managing and the filling in of the document. This
              improves the overall quality of the work being done as compared to
              doing it manually. This also eliminate the duplication of the
              work. The automated system ensure data entries are accurate. With
              this, the business is also able handle four times their current
              client.
            </span>
            <h3 className="pt-3">Reduction of clients' dependency</h3>
            <span>
              Digitalization of the work process allows the clients to upload
              the necessary documents online without having the need of staffs
              of obtaining the physical documents from the clients. This also
              eliminates the needs of having physical meet up with the clients
              for documentations like signature as staff can request for
              E-signature for signing of documents. This increases the overall
              output by five times as the dependency on the availability the
              clients and physical documents are reduced significantly with the
              system.
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

export default Evergrowth;
