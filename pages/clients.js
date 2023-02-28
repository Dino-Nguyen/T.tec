import Layout from "../components/Layout";

const Clients = () => {
  return (
    <Layout page="clients">
      <section className="clients-container">
        <div>
          <img
            className="clients-container-banner"
            src="./assets/clients/banner.png"
          />
          <div className="clients-container-title">Clients</div>
        </div>
        <div className="clients-box">
          <div className="clients-item-1">
            <div className="clients-item-title">Clients</div>
            <div className="clients-item-text">
              We have worked with a wide range of clients from different
              industries, feel free to approach us if you have any enquiries!
            </div>
          </div>
          <div className="clients-item-2">
            <div className="clients-item-2-img">
              <img src="./assets/clients/1.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/2.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/3.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/4.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/5.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/6.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/7.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/8.png" />
            </div>
            <div className="clients-item-2-img">
              <img src="./assets/clients/9.png" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
