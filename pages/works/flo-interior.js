import Layout from "../../components/Layout";

const FloInterior = () => {
  return (
    <Layout page="works/flo-interior">
      <section>
        <div className="detail_container container">
          <div className="breadcrums">
            <a href="/">Home </a>
            &gt;
            <a href="/work"> Works </a>
            &gt; Flo Interior
          </div>
          <div className="detail_title_container d-flex align-items-center">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src="../assets/work/flo-interior/Logo.png" alt="logo" />
                </div>
                <p className="mt-4">Flo Interior Pte Ltd</p>
                <h2>Interior Design Platform</h2>
              </div>
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="../assets/work/flo-interior/Flo-interior-1.png"
                  alt="flo-interrior-1"
                />
              </div>
            </div>
          </div>
          <div className="section_1 mt-5">
            <div className="row justify-content-between">
              <div className="col-md-6 d-flex flex-column">
                <div className="w-100 text-center">
                  <img
                    src="../assets/work/flo-interior/Flo-interior-2.png"
                    alt="section_img_1"
                  />
                </div>
                <div className="w-100 text-center">
                  <img
                    src="../assets/work/flo-interior/Flo-interior-3.png"
                    alt="section_img_2"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2>Challenges Faced</h2>
                <div className="d-flex flex-column">
                  <span>
                    With some of their commercial clients being international
                    brands, it gives them the ideal opportunity to expand their
                    business outside of Singapore
                  </span>
                  <span>
                    However with such growth plans, it can be manpower
                    intensive. Flo Design hopes to make use of technology to
                    digitize, simplify or automate work process in hope to
                    increase efficiency. The goal is to allow the staff to put
                    less focus on local market but still able to dabble in the
                    respective industries offshore.
                  </span>
                  <span>
                    Flo Design Pte Ltd are using the traditional and manual
                    approach in their business operations
                  </span>
                </div>
                <p>The following processes are done manually:</p>
                <ul>
                  <li>Manual data entry for new projects</li>
                  <li>Assigning work to the contractors</li>
                  <li>
                    Manual, written or verbal update of design and production
                    development
                  </li>
                  <li>On-site Project Management</li>
                  <li>On-site Manpower management</li>
                  <li>Emails/direct calls of Clients’ enquiry</li>
                  <li>Traditional finance and payment processes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section_2 mt-5 pt-5">
            <h2>Solution</h2>
            <div>
              <p>
                An integrated food ordering cum business operations application.
              </p>
              <div className="row">
                <div className="col-md-8 d-flex flex-column">
                  <h3>Mobile Application</h3>
                  <span>
                    Customers would be able to add projects in the mobile app.
                    Once proposed project is ready to get started, contractors
                    would be assigned for the project
                  </span>
                  <span>
                    When viewing the project status, customers are able to get
                    live status updates of the work in the application itself.
                    Customers will get notification regarding projet updates and
                    ongoing promotions.
                  </span>
                  <span>
                    When paying, customers are able to do using the application.
                    Payment reminders can be send to the customers. This is all
                    done through the use of the Financial Dashboard. Users can
                    make payment using Paynow or Credit/Debit card. Once payment
                    is made, it would be updated on the financial dashboard.
                  </span>
                  <span>
                    After project completion, customers are able to provide
                    feedback, to rate how successful the overall project is.
                  </span>
                </div>
                <div className="col-md-4 position-relative">
                  <div className="section_img_1">
                    <img
                      src="../assets/work/flo-interior/Ellipse-27-2.png"
                      alt="ellipse"
                    />
                  </div>
                  <div className="section_img_2">
                    <img
                      className="w-100"
                      src="../assets/work/flo-interior/Flo-interior-4.png"
                      alt="section_img"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <h3>Web System</h3>
                  <div className="d-flex flex-column">
                    <span>
                      With the web system, admins are able to view and update
                      project status. When there are projects from customers,
                      admins are able to assign contractors using the web
                      system. Admins are able to add, remove or block the
                      customer depending on the situation.
                    </span>
                    <span>
                      They are able to access the financial dashboard to take
                      note of the payments being made by the customers. Using
                      the web system, admins are able to view all of the
                      customers data and generate reports of the projects.
                    </span>
                    <span>
                      After the projects ends, feedbacks will be collated from
                      the customers and summarized. The system will generate
                      statistics and reports which are used to analyze the
                      success rate of each project.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2>Result</h2>
            <h3>Increased Customer Engagement &amp; Satisfaction</h3>
            <span>
              Customers are able to get live update of their project status
              which are normally sent to managers through email. A level of
              trust is built as by giving live updates, they are being
              transparent in terms of the progress of the report. Feedbacks can
              also be given to the business by the customers once the project is
              finalized with in turns, increase the customer satisfaction by two
              times.
            </span>
            <h3 className="pt-3">Less manpower required</h3>
            <span>
              The working hours are reduced by
              <b style={{ color: "red" }}>four times</b> for the project and
              account manager. Most of the tedious tasks which includes
              financial reports, contractor assignment are being handled by the
              system. Manual work has been reduced which increase the
              productivity of the staff by
              <b style={{ color: "red" }}>two times</b>. This also increases the
              number of projects they are able to tackle by
              <b style={{ color: "red" }}>four times</b>.
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

export default FloInterior;
