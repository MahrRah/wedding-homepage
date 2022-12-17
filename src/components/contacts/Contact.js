
import React from 'react';
import '../../assets/css/main.css'
import { Trans,useTranslation } from "react-i18next";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function Contact() {
  const { t } = useTranslation(["common","overview"]);


  return (
    <div id="main">
      <section className="post">

        <header className="major">
          <h1>{t("overview:contact")}</h1>
        </header>
        <p>{t("overview:contactText")}</p>
        <Trans i18nKey="contact:mailBoxText" components={{
          mail_anchor: <a href="mailto:thegrosjeans.2023@gmail.com" style={{ textDecoration: "underline",fontWeight: "bold"}}/>
        }} >
          We have a general mail box for all question: <mail_anchor>thegrosjeans.2023@gmail.com</mail_anchor></Trans>
        <br/>
        <LightGallery
          speed={500} >
          <img style={{ width: "90%" }} src={require("../../images/flowchart-wedding.jpg")} alt="" />

        </LightGallery>
        <br/>
        <div class="row">
            <h3>{t("contact:contactInfoTitle")}</h3>
          <div class="col-6 col-12-small">
            <h4>Priska</h4>
            <p>
              <b>{t("common:phone")}</b> 0041 79 434 55 09 <br />
              <b>{t("common:email")}:</b>  email@mail.com<br />
            </p>
          </div>
          <div class="col-6 col-12-small">
          <h4>Christian</h4>
            <p>
              <b>{t("common:phone")}</b> 0041 79 434 55 09 <br />
              <b>{t("common:email")}:</b>  email@mail.com<br />
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;