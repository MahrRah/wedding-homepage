
import React from 'react';
import '../../assets/css/main.css'
import { Trans, useTranslation } from "react-i18next";
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
        <div>
          <h2>Our Best People</h2>
          <>
            <span className="image left" style={{ width: "40vw" }}><img src={require("../../images/person-placeholder.jpg")} alt="" /></span>
            <h3 style={{ textAlign: "left" }}>Christian & Priska Sgier</h3>
            <p style={{ textAlign: "left" }}>{t("contact:sgiers")}</p>
          </>
        </div>
        <hr />
        <div>
          <h2>The Groomsman</h2>
          <>
            <span className="image left" style={{ width: 200 }}><img src={require("../../images/person-placeholder.jpg")} alt="" /></span>
            <h3 style={{ textAlign: "left" }}>Moritz & Juri</h3>
            <p style={{ textAlign: "left" }}>
              <Trans i18nKey="contact:ushers" components={{
                music_anchor: <a href="https://www.youtube.com/watch?v=kJQP7kiw5Fk" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />,
                wiki_anchor: <a href="https://en.wikipedia.org/wiki/Groomsman" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />
              }}> We present Valentin’s terrific ushers: Juri and Moritz!\n\n You don’t know what an usher is? Don’t worry neither did Valentin, Juri, and Moritz before the planning of this wedding! (here is a detailed explanation: <wiki_anchor>Wiki</wiki_anchor>\n\n
                Now the three of them are bound do each other forever through the mystical presence of usher hood.\n\n Valentin met Juri already at his birth. Together they spend a lovely childhood fighting, eating cake and playing cricket in the garden of their parents house.\n\n
                Moritz got to know Valentin as a part of the terrific SeatCase project at ETH in Zürich. While listening to roughly 1’000 repetitions of “Despacito” by Luis Fonsi and Daddy Yankee (Yeah, <music_anchor>that</music_anchor> is my jam! ) they quickly discovered mutual interests (in beer, cricket, and politics) became friends and drink beer, discuss politics, and play cricket together happily ever after.
              </Trans></p>
          </>
        </div>
        <hr />
        <h2 style={{ textAlign: "left" }}>The Bridesmaids</h2>
        <>
          <span className="image right" style={{ width: 200 }}><img src={require("../../images/person-placeholder.jpg")} alt="" /></span>
          <h3 style={{ textAlign: "left" }}>Vanessa & Julia</h3>
          <p style={{ textAlign: "left" }}>{t("contact:bridesmaids")}</p>
        </>
      </section >
    </div>
  );
}

export default WeddingParty;