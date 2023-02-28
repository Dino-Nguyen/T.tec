import axios from "axios";
import { useForm } from "react-hook-form";
import Router from "next/router";
import Layout from "../components/Layout";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("/testec/contact-us", data)
      .then((response) => {
        if (response.status === 200) {
          alert("Successfully booked");

          Router.replace("/");
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
  return (
    <Layout page="contact-us">
      <div className="contact-us-page">
        <div className="contact-us-banner">
          <div className="contact-us-banner-title">Book Now</div>
          <img src="./assets/contact-us/banner (2).png" alt="" />
        </div>
        <section className="contact-us-container">
          <div className="contact-us-title">
            Interested to work with us as a client?
          </div>
          <div className="contact-us-box">
            <div className="contact-us-box-1">
              <div className="contact-us-item">
                <div>
                  Fill up and submit the form below and we will contact you
                  within 1 week.
                </div>
                <div className="contact-us-required">*Required Fields</div>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  noValidate="novalidate"
                  action=""
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div>Full Name*</div>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                          required=""
                          {...register("name", {
                            required: true,
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                          <p className="invalid_input" role="alert">
                            Please enter your name
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div>Email Address*</div>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required=""
                          {...register("email", {
                            required: true,
                            pattern:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p className="invalid_input" role="alert">
                            Please enter a valid email address
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div>Contact Number*</div>
                        <input
                          type="tel"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Contact Number"
                          required=""
                          {...register("phone", {
                            required: true,
                            pattern:
                              /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                          })}
                          aria-invalid={errors.phone ? "true" : "false"}
                        />
                        {errors.phone && (
                          <p className="invalid_input" role="alert">
                            Please enter your phone number
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group message">
                        <div className="message-title">Message*</div>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={5}
                          placeholder=""
                          required=""
                          defaultValue={""}
                          {...register("message", {
                            required: true,
                          })}
                          aria-invalid={errors.message ? "true" : "false"}
                        />
                        {errors.message && (
                          <p className="invalid_input" role="alert">
                            Please enter your message
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="submit-box">
                      <div className="captcha-box">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LcaDOEcAAAAAMMMjj-8-BQorfN6X5DJIScfRuFz"
                        />
                        <img src="./assets/contact-us/awscloudflaresme_go_digital-01-1.png" />
                      </div>
                    </div>
                  </div>
                  <button
                    id="submit-box"
                    type="submit"
                    // className="g-recaptcha"
                    // data-sitekey="reCAPTCHA_site_key"
                    // data-callback="onSubmit"
                    // data-action="submit"
                    // placeholder="Submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </form>
              </div>
            </div>
            <div className="contact-us-box-2">
              <div className="contact-us-box-2-title">Locate Us</div>
              <div className="contact-us-box-2-item">
                <div className="contact-us-box-2-item-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  SINGAPORE (HEADQUARTER)
                </div>
                <div className="contact-us-box-2-text">
                  1 Harvey Road #04-00
                </div>
                <div className="contact-us-box-2-text">Singapore 369610</div>
                <a href="https://www.google.co.in/maps/place/1+Harvey+Rd,+%2304+00,+Singapore+369610/@1.3327842,103.8844507,17z/data=!3m1!4b1!4m5!3m4!1s0x31da178e8fea6bb3:0xc8237dc4932aa70c!8m2!3d1.3327842!4d103.8844507?hl=en">
                  <div className="contact-us-box-2-gg-map">
                    Click here to view directions
                  </div>
                </a>
              </div>
              <div className="contact-us-box-2-item">
                <div className="contact-us-box-2-item-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  Operating Hours
                </div>
                <div className="contact-us-box-2-text">
                  Monday to Friday: 9.00am to 6.30pm
                </div>
                <div className="contact-us-box-2-text">
                  Saturday, Sunday, Public Holiday: Closed
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUs;
