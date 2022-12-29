
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';


function WeddingParty() {
  const { t } = useTranslation(["common"]);
  const Person = ({ side, align, name, text, height }) => {
    return (
      <>
        <span className={side} style={{ width: 200 }}><img src={require("../../images/person-placeholder.jpg")} alt="" /></span>
        <h3 style={{ textAlign: align }}>{name}</h3>
        <p style={{ height: height, textAlign: align }}>{text}</p>
      </>);
  };

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("common:weddingparty")}</h1>
        </header>
        <h2>Our Best People</h2>
        <Person side="image left" align='left' name="Christian & Priska Sgier" text={t("contact:sgiers")} height="300" />
        <hr />

        <h2>The Groomsman</h2>
        <Person side="image left" align='left' name="Moritz & Juri" text={t("contact:ushers")} height="200" />

        <h2 style={{ textAlign: "right" }}>The Bridesmaids</h2>
        <Person side="image right" align='left' name="Vanessa & Julia" text={t("contact:bridesmaids")} height="200" />
      </section >
    </div>
  );
}

export default WeddingParty;