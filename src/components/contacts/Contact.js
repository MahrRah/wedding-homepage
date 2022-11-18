
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';


function Contact() {
  const { t } = useTranslation(["common"]);


  return (
    <div id="main">
      <section className="post">

        <header className="major">
          <h1>{t("overview:contact")}</h1>
        </header>

        <p>{t("overview:contactText")}</p>
      </section>
    </div>
  );
}

export default Contact;