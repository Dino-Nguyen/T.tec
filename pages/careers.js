import Layout from "../components/Layout";

const Careers = () => {
  return (
    <Layout page="careers">
      <section className="careers-container">
        <img className="careers-banner" src="./assets/careers/Careers.png" />
        <div className="careers-container-title">CAREERS</div>
        <div className="careers-box-1">
          <div className="careers-box-1-title">AVAILABLE POSITIONS</div>
          <div className="careers-card">
            <div className="careers-card-text">
              <div className="careers-card-text-title">
                Senior Software Engineer
              </div>
              <div className="careers-card-info">
                <div className="careers-card-inner">
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
                <div className="careers-card-inner">
                  {" "}
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
                <div className="careers-card-inner">
                  {" "}
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
            <a href="/apply-now">
              <button className="apply-button">Apply Now</button>
            </a>
          </div>
        </div>
        <div className="careers-box-2" id="careers-box-2">
          <div className="careers-box-2-item">
            <div className="careers-box-2-card">
              <img src="./assets/careers/Group-303.png" />
              <div className="careers-box-2-card-text">Competitive Salary</div>
            </div>
            <div className="careers-box-2-card">
              <img src="./assets/careers/Group-304.png" />
              <div className="careers-box-2-card-text">Great Co-Workers</div>
            </div>
          </div>
          <div className="careers-box-2-item card-2">
            <div className="careers-box-2-card">
              <img src="./assets/careers/Group-302.png" />
              <div className="careers-box-2-card-text">Performance Bonuses</div>
            </div>
            <div className="careers-box-2-card">
              <img src="./assets/careers/Group-301.png" />
              <div className="careers-box-2-card-text">Remote Working</div>
              <div className="careers-box-2-card-text">
                (For Overseas Applicants)
              </div>
            </div>
          </div>
          <div className="careers-box-why">
            <div className="careers-box-why-title">WHY TES TEC?</div>
            <div className="careers-box-why-text">
              At TES TEC, we believe in teamwork and dedication. With more than
              100 satisfied clients, we are looking for dynamic and talented
              individuals who are willing to commit themselves to providing our
              clients with high-quality works.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
