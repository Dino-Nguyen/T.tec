import Header from "./SiteHeader";
import Footer from "./SiteFooter";
import Head from "next/head";
import { useMemo } from "react";
import { setupAxios } from "../config/setup-axios";

setupAxios();

const Layout = ({ children, page }) => {
  const getLinkStyleByPage = useMemo(() => {
    return `${page}.css`;
  }, [page]);

  const getscriptByPage = useMemo(() => {
    switch (page) {
      case "digital-marketing":
        return (
          <>
            <script src="./scripts/digital-marketing.js"></script>
          </>
        );
        break;

      default:
        break;
    }
  }, [page]);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{page.match("/") === null ? page : page.match("/").input}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/font/Kallisto-Medium.otf" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.6.0.js"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/css/intlTelInput.css"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/intlTelInput.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <link rel="stylesheet" href="./styles/base.css" />
        <link rel="stylesheet" href="./styles/contact-us.css" />
        <link rel="stylesheet" href="./styles/index.css"></link>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
        />
        <link
          rel="stylesheet"
          href={
            page.match("/") === null
              ? `./styles/${getLinkStyleByPage}`
              : `../styles/${getLinkStyleByPage}`
          }
        />
      </Head>

      <Header page={page} />

      <main>{children}</main>

      <Footer page={page} />

      {getscriptByPage}

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
      <script src="https://www.google.com/recaptcha/api.js"></script>
      <script src="https://code.jquery.com/jquery-latest.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"></script>
      <script src="https://code.jquery.com/jquery-latest.min.js"></script>

      <script
        src={
          page.match("/") === null
            ? "./scripts/jquery3.6.3.js"
            : "../scripts/jquery3.6.3.js"
        }
      ></script>
      <script
        src={
          page.match("/") === null
            ? "./scripts/index.js"
            : "../scripts/index.js"
        }
      ></script>
      <script
        src={
          page.match("/") === null
            ? "./scripts/menu-mobile-btn.js"
            : "../scripts/menu-mobile-btn.js"
        }
      ></script>
    </>
  );
};

export default Layout;
