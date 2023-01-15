
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
          <h1>{t("common:contact")}</h1>
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
              <b>{t("common:phone")}</b> <a href="tel:0041789035307">+41 78 903 53 07 </a><br />
              <b>{t("common:email")}:</b> <a href="mailto:priska.sgier@gmail.com">priska.sgier@gmail.com</a><br />
            </p>
          </div>
          <div className="col-6 col-12-small">
            <h4>Christian</h4>
            <p>
              <b>{t("common:phone")}</b> <a href="tel:0041793554375">+41 79 355 43 75</a><br />
              <b>{t("common:email")}:</b><a href="mailto:chsgier@me.com"> chsgier@me.com </a><br />
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