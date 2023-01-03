
import React from 'react';
import '../../assets/css/main.css'
import { Trans, useTranslation } from "react-i18next";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function Contact() {
  const { t } = useTranslation(["common", "contact"]);


  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("contact:contact")}</h1>
        </header>
        <Trans i18nKey="contact:contactText" components={{
          mail_anchor: <a href="mailto:thegrosjeans.2023@gmail.com" style={{ textDecoration: "underline", fontWeight: "bold" }} />
        }} > If you have any questions regarding the wedding, which this homepage cannot answer, please do not hesitate to contact us, our best people or send a mail to <mail_anchor>thegrosjeans.2023@gmail.com</mail_anchor>. We would politely ask you to not contact us directly on the day of our wedding, as both of use will probably be to nervouse to be any help 😊. Our best man and the maid of honor however will be happy to help you out even then.
        </Trans>
        <br />
        <br />
        <h3>{t("contact:contactInfoTitle")}</h3>
        <div className="row">
          <div className="col-6 col-12-small">
            <h4>Priska</h4>
            <p>
              <b>{t("common:phone")}</b> 0041 79 434 55 09 <br />
              <b>{t("common:email")}:</b>  email@mail.com<br />
            </p>
          </div>
          <div className="col-6 col-12-small">
            <h4>Christian</h4>
            <p>
              <b>{t("common:phone")}</b> 0041 79 434 55 09 <br />
              <b>{t("common:email")}:</b>  email@mail.com<br />
            </p>
          </div>
        </div>
        {/* <LightGallery
          speed={500} >
          <img style={{ width: "90%" }} src={require("../../images/flowchart-wedding.jpg")} alt="" />

        </LightGallery> */}
      </section>

    </div>
  );
}

export default Contact;