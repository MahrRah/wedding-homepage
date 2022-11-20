
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function Contact() {
  const { t } = useTranslation(["common"]);


  return (
    <div id="main">
      <section className="post">

        <header className="major">
          <h1>{t("overview:contact")}</h1>
        </header>
        <p>{t("overview:contactText")}</p>
        <b>We have a general mail box for all question: </b><a href="mailto:thegrosjeans.2023@gmail.com">thegrosjeans.2023@gmail.com</a><br />

        <LightGallery
          speed={500} >
          <img style={{ width: "90%" }} src={require("../../images/flowchart-wedding.jpg")} alt="" />

        </LightGallery>


        <div class="row">
          <div class="col-6 col-12-small">
            <h3>Our contact</h3>
            <p>
              <b>Mahra number:</b> 0041 79 434 55 09 <br />
              <b>Valentin number:</b>  0041 79 434 55 09<br />
            </p>
          </div>
          <div class="col-6 col-12-small">
            <h3>Best Peoples contact</h3>
            <p>
              <b>Phone number:</b> 0041 79 434 55 09 <br />
              <b>Phone number:</b>  0041 79 434 55 09<br />
              <b>Address:</b> Luegislandstrasse 78, 8051 Zürich
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;