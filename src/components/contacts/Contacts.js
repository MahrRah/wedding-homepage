
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';
function Contact() {
  const { t } = useTranslation(["common"]);
  const Person = ({ side, align }) => {
    return (
      <>
        <span className={side} style={{ width: 200 }}><img src={require("../../images/person-placeholder.jpg")} alt="" /></span>
        <p style={{ height: 200, textAlign: align }}>Hi my name is Vale</p>
      </>);
  };

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("common:contacts")}</h1>
        </header>
        <Person side={"image left"} align={'left'} />
        <Person side={"image right"} align={'right'} />
      </section>

    </div>
  );
}

export default Contact;