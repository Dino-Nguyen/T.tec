import { Fragment } from "react";

const Footer = ({ page }) => {
  return (
    <Fragment>
      <footer>
        <div className="footer_container">
          <div className="row px-3">
            <div className="footer_main_container">
              <div className="footer_main col-md-10">
                <div className="space_sm">
                  <p>Quick Links</p>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="/service">Services</a>
                    </li>
                    <li>
                      <a href="/work">Works</a>
                    </li>
                    <li>
                      <a href="/clients">Clients</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="/careers">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="space_sm">
                  <p>Services</p>
                  <ul>
                    <li>
                      <a href="/digital-marketing">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="/mobile-development">Mobile Development</a>
                    </li>
                    <li>
                      <a href="/website-development">Website Development</a>
                    </li>
                    <li>
                      <a href="/cloud-solutions">Cloud Solution</a>
                    </li>
                    <li>
                      <a href="/enterprise-solutions">Enterprise Solution</a>
                    </li>
                    <li>
                      <a href="/ux-ui-design">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="/qa-testing">QA &amp; Testing</a>
                    </li>
                    <li>
                      <a href="/it-consulting">IT Consulting</a>
                    </li>
                  </ul>
                </div>
                <div className="space_sm">
                  <p>Socials</p>
                  <div className="d-flex w-100">
                    <img
                      className="me-2"
                      width={30}
                      src={
                        page.match("/") === null
                          ? "./assets/FB-icon.png"
                          : "../assets/FB-icon.png"
                      }
                      alt="fb-icon"
                    />
                    <img
                      width={30}
                      src={
                        page.match("/") === null
                          ? "./assets/Insta-icon.png"
                          : "../assets/Insta-icon.png"
                      }
                      alt="insta-icon"
                    />
                  </div>
                </div>
                <div className="space_sm d-flex flex-column">
                  <p>Contact Us</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail me-2"
                      width={18}
                      viewBox="0 0 24 24"
                      strokewidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokelinecap="round"
                      strokelinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                    godigital@asure.pro
                  </span>
                  <span>
                    <svg
                      className="me-2"
                      width={16}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                    </svg>
                    (65) 3157 2621
                  </span>
                  <span>
                    1 Harvey Road #04-00
                    <br />
                    Singapore 369610
                  </span>
                  <img
                    width={84}
                    src={
                      page.match("/") === null
                        ? "./assets/SMEgoDigital_final-1.png"
                        : "../assets/SMEgoDigital_final-1.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-2 text-end">
                <div className="to_top_btn">
                  <a href="#">
                    <img
                      src={
                        page.match("/") === null
                          ? "./assets/Link-arrow.png"
                          : "../assets/Link-arrow.png"
                      }
                      alt="link-arrow-icon"
                    />
                  </a>
                </div>
                <p className="mt-3">To top</p>
              </div>
            </div>
            <hr className="border-white mt-0" />
            <div className="row">
              <div className="col-md-6">
                <span className="me-3 mb-0">
                  © Tes Tec Pte Ltd 2022. All Rights Reserved
                </span>
                <a className="text-capitalize" href="#">
                  Privacy Policy
                </a>
              </div>
              <div className="col-md-6 d-flex flex-row-reverse">
                <div className="d-flex">
                  <img
                    width={60}
                    height={30}
                    src={
                      page.match("/") === null
                        ? "./assets/Cyber-safe-social-icon.png"
                        : "../assets/Cyber-safe-social-icon.png"
                    }
                    alt="cyber-safe-social-icon"
                  />
                  <span className="pt-1 mb-0">
                    ENTERPRISE ON ASSET-BASED CYBER DEFENSE AN INITIATIVE BY CSA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
