import { Fragment } from "react";

const Header = ({ page }) => {
  return (
    <Fragment>
      <header className="sticky-top bg-white d-flex align-items-center">
        <nav className="container py-3 d-flex justify-content-between">
          <div className="logo_header">
            <a href="/">
              <img
                className="w-100"
                src={
                  page.match("/") === null
                    ? "./assets/Testec-logo.png"
                    : "../assets/Testec-logo.png"
                }
                alt="logo"
              />
            </a>
          </div>
          <div className="menu_header">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="/work">Works</a>
              </li>
              <li>
                <a href="/contact-us">Contact</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li className="pe-3">
                <a className="btn btn_main" href="/book-now">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          <div id="menu_mobile" className="menu_mobile">
            <button className="fas fa-bars hamburger" />
          </div>
        </nav>
      </header>
      <div className="menu_mobile_list">
        <img
          style={{ cursor: "pointer" }}
          className="close"
          src={
            page.match("/") === null
              ? "./assets/close.svg"
              : "../assets/close.svg"
          }
          alt=""
        />
        <ul className="menu_header_mobile">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/work">Works</a>
          </li>
          <li>
            <a href="/contact-us">Contact</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/book-now"> Book Now </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
