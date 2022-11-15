
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';
import { Grid } from 'react-loader-spinner';
function Contact() {
  const { t } = useTranslation(["common"]);
  const Person = ({ side, align, name, text }) => {
    return (
      <>
        <span className={side} style={{ width: 200 }}><img src={require("../../images/person-placeholder.jpg")} alt="" /></span>
        <h3 style={{ textAlign: align }}>{name}</h3>
        <p style={{ height: 200, textAlign: align }}>{text}</p>
      </>);
  };

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("common:contacts")}</h1>
        </header>
        <h2>Our Best People</h2>
        <Person side="image left" align='left' name="Christian" text="asds" />
        <Person side="image right" align='right' name="Priska" text="asds" />
        <hr />

<h2>The Groomsman</h2>
        <Person side="image left" align='left' name="Moritz" text="asds" />
        <Person side="image left" align='left' name="TBD" text="asds" />
        
        <h2 style={{textAlign: "right"}}>The Bridesmaids</h2>
        <Person side="image right" align='right' name="Vanessa" text="asds" />
        <Person side="image right" align='right' name="Julia" text="asds" />
      </section >
</div>
  );
}

export default Contact;