// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import React, { useState } from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";

import Layout from "../components/Layout";

const ApplyNow = () => {
  const [baseImage, setBaseImage] = useState();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.resume = baseImage;
    errors.resume && document.getElementById("invalid-resume").display('block')
    axios
      .post("/testec/apply", data)
      .then((response) => {
        if (response.status === 200) {
          alert("Successfully apply");

          Router.replace("/");
          console.log(response);
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <Layout page="apply-now">
      <section className="contact-us-container apply-container">
        <div className="apply-banner">
          <img src="./assets/apply-now/Careers.png" />
          <div className="apply-banner-title">CAREERS</div>
        </div>
        <div className="apply-box">
          <div className="apply-info">
            <div className="apply-info-item-1">
              <div className="apply-info-item-1-title">
                SENIOR SOFTWARE ENGINEER
              </div>
              <div className="apply-item-box">
                <div className="apply-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bar-chart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                  </svg>
                  3 - 5 years of experience
                </div>
                <div className="apply-item">
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
                  Singapore
                </div>
                <div className="apply-item">
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
                  Full-Time
                </div>
              </div>
            </div>
            <div className="apply-info-item-2">
              <div className="apply-info-item-2-title">Responsibilities:</div>
              <div className="apply-text">
                We are looking for Dynamic individual who has a passion for
                developing high-quality user-centric web and mobile
                applications. You will join a team of talented people exploring
                and working on the cutting edge technologies in the digital
                media.
              </div>
              <div className="apply-text">
                <ul>
                  <li>Assist with design and development of software</li>
                  <li>Testing and debugging software to keep it optimized</li>
                  <li>
                    Writing clean code for the front and back end of the
                    software
                  </li>
                  <li>
                    Designing user interactions on the web application itself
                  </li>
                  <li>
                    Creating servers and databases of the back end of the
                    software
                  </li>
                  <li>Ensure cross-platform compatibility and optimization</li>
                  <li>
                    Work with new applications/technologies working both
                    front-end and back-end web development projects
                  </li>
                  <li>Work with UI/UX Designers to design new features</li>
                  <li>
                    Recommending changes and enhancements to software
                    applications
                  </li>
                  <li>
                    Involved in the brainstorming of innovative ideas,
                    conceptualization, system design, development, testing, and
                    support of web responsive or mobile applications.
                  </li>
                </ul>
              </div>
            </div>
            <div className="apply-info-item-2">
              <div className="apply-info-item-2-title">Requirements:</div>
              <div className="apply-text">
                We are looking for Dynamic individual who has a passion for
                developing high-quality user-centric web and mobile
                applications. You will join a team of talented people exploring
                and working on the cutting edge technologies in the digital
                media.
              </div>
              <div className="apply-text">
                <ul>
                  <li>
                    We are looking for Dynamic individual who has a passion for
                    developing high-quality user-centric web and mobile
                    applications. You will join a team of talented people
                    exploring and working on the cutting edge technologies in
                    the digital media.
                  </li>
                  <li>Assist with design and development of software</li>
                  <li>Testing and debugging software to keep it optimized</li>
                  <li>
                    Writing clean code for the front and back end of the
                    software
                  </li>
                  <li>
                    Designing user interactions on the web application itself
                  </li>
                  <li>
                    Creating servers and databases of the back end of the
                    software
                  </li>
                  <li>Ensure cross-platform compatibility and optimization</li>
                  <li>
                    Work with new applications/technologies working both
                    front-end and back-end web development projects
                  </li>
                  <li>Work with UI/UX Designers to design new features</li>
                  <li>
                    Recommending changes and enhancements to software
                    applications
                  </li>
                  <li>
                    Involved in the brainstorming of innovative ideas,
                    conceptualization, system design, development, testing, and
                    support of web responsive or mobile applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-us-title">
            Interested to Join our dynamic team?
          </div>
          <div className="contact-us-box apply-box-1">
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
                        <div>First Name (Given Name) *</div>

                        <input
                          style={errors.firstName ? { borderColor: 'red' } : {}}
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder=""
                          required=""
                          {...register("firstName", {
                            required: true,
                          })}
                          aria-invalid={errors.firstName ? "true" : "false"}
                        />

                      </div>
                      {errors.firstName && (
                        <p className="invalid_input" role="alert">
                          Please enter your first name
                        </p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div>Last Name (Surname) *</div>
                        <input
                          style={errors.lastName ? { borderColor: 'red' } : {}}
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder=""
                          required=""
                          {...register("lastName", {
                            required: true,
                          })}
                          aria-invalid={errors.lastName ? "true" : "false"}
                        />

                      </div>
                      {errors.lastName && (
                        <p className="invalid_input" role="alert">
                          Please enter your last name
                        </p>
                      )}
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div>Email Address*</div>
                        <input
                        style={errors.email ? { borderColor: 'red' } : {}}
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder=""
                          required=""
                          {...register("email", {
                            required: true,
                            pattern:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                        />

                      </div>
                      {errors.email && (
                        <p className="invalid_input" role="alert">
                          Please enter a valid email address
                        </p>
                      )}
                    </div>
                    {/* <div className="col-md-12">
                      <div className="form-group">
                        <div style={{ marginBottom: 5 }}>Contact Code*</div>
                        <input
                          id="contactCode"
                          type="tel"
                          name="contactCode"
                          maxLength={15}
                          className="form-control"
                          // style={{ width: 700 }}
                          {...register("contactCode", {
                            required: true,
                            pattern:
                              /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                          })}
                          aria-invalid={errors.contactCode ? "true" : "false"}
                        />



                        {/* <PhoneInput country={'vi'} value={phone} onChange={e => setPhone(e.target.value)}></PhoneInput> */}
                      {/* </div>
                      {errors.contactCode && (
                        <p className="invalid_input" role="alert">
                          Please enter your contactCode
                        </p>
                      )}
                    </div>  */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <div style={{ marginBottom: 5 }}>Contact Number*</div>
                        <input
                        style={errors.phone ? { borderColor: 'red' } : {}}
                          id="phone"
                          type="tel"
                          name="phone"
                          maxLength={15}
                          className="form-control"
                          // style={{ width: 700 }}
                          {...register("phone", {
                            required: true,
                            pattern:
                              /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                          })}
                          aria-invalid={errors.phone ? "true" : "false"}
                        />


                        <div id="error-msg" className="hide" />
                        {/* <PhoneInput country={'vi'} value={phone} onChange={e => setPhone(e.target.value)}></PhoneInput> */}
                      </div>
                      {errors.phone && (
                        <p className="invalid_input" role="alert">
                          Please enter your phone number
                        </p>
                      )}
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <div>Website URL (Optional)</div>
                        <input
                          className="form-control"
                          placeholder="Eg. Linkedin, Github Profile"
                          required=""
                          {...register("websiteURL", {
                            required: false,
                            pattern: /./g,
                          })}
                          aria-invalid={errors.websiteURL ? "true" : "false"}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div style={{ marginBottom: 5 }}>Resume (5MB Max)</div>

                        <div className=" resume-text  resume  form-control-file ">
                          {" "}
                          <input
                            style={errors.phone ? { borderColor: 'red', color: 'red' } : {}}
                            type="file"
                            className="resume-text  "
                            multiple
                            accept=".jpg, .png"
                            onChange={(e) => {
                              uploadImage(e);
                            }}
                        
                          />
                          <p id='invalid-resume' className="invalid_input"> Please choose a resume </p>
                           {/* {
                         errors.resume && (
                          <p className="invalid_input" role="alert">
                            Please choose a resume
                          </p>
                        )
                       
                      } */}


                        </div>
                       
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
            <div>
              <img
                className="contact-us-box-2-img"
                src="./assets/apply-now/Group-288.png"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyNow;
