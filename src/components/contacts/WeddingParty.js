
import React from 'react';
import '../../assets/css/main.css'
import { Trans, useTranslation } from "react-i18next";
import i18n from '../../i18n.js';


function WeddingParty() {
  const { t } = useTranslation(["common"]);
  const Person = ({ side, align, name, text, height }) => {
    return (
      <>
        <span className={side} style={{ width: 200 }}><img src={require("../../images/wedding-party/PriskaChristian.jpg")} alt="" /></span>
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
          <h2>{t("contact:bestpeople")}</h2>
          <>
            <span className="image left" style={{ width: "20vw" }}><img src={require("../../images/wedding-party/PriskaChristian.jpg")} alt="" /></span>
            <h3 style={{ textAlign: "left" }}>Christian & Priska Sgier</h3>
            <p style={{ textAlign: "left" }}>{t("contact:sgiers")}</p>
          </>
        </div>
        
        <hr />
        <div>

        <h2 style={{ textAlign: "left" }}>{t("contact:bridesmaids")}</h2>
        <>
          <span className="image right" style={{ width: "100vw"  }}><img src={require("../../images/wedding-party/JuliaVanessa.jpg")} alt="" /></span>
          <h3 style={{ textAlign: "left" }}>Vanessa & Julia</h3>
          <p style={{ textAlign: "left" }}>{t("contact:bridesmaidsText")}</p>
        </>
        </div>
        <hr />
        <div>
          <h2>{t("contact:ushers")}</h2>
          <>
            <span className="image left" style={{ width: "100vw" }}><img src={require("../../images/wedding-party/JuriMoritz.jpg")} alt="" /></span>
            <h3 style={{ textAlign: "left" }}>Moritz & Juri</h3>
            <p style={{ textAlign: "left" }}>
              <Trans i18nKey="contact:ushersText" components={{
                music_anchor: <a href="https://www.youtube.com/watch?v=kJQP7kiw5Fk" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />,
                wiki_anchor: <a href="https://en.wikipedia.org/wiki/Groomsman" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />
              }}> We present Valentin’s dashing ushers: Juri and Moritz!\n\n You don’t know what an usher is? Don’t worry neither did Valentin, Juri, and Moritz before the planning of this wedding! (here is a detailed explanation: <wiki_anchor>Wikipedia</wiki_anchor>\n\n Now the three of them are bound to each other forever through the mystical bond of usher hood.\n\n Valentin met Juri already at his birth  (Note: Juri’s birth that is, though you might be forgiven if you thought otherwise - Valentin aged extraordinarily well). Together they spend a lovely childhood fighting, eating cake and playing cricket in the garden of their parents house at the shores of Lake Constance.\n\n Moritz got to know Valentin as a part of the terrific SeatCase project at ETH in Zürich. While listening to roughly 1’000 repetitions of “Despacito” by Luis Fonsi and Daddy Yankee (Yeah, <music_anchor>that</music_anchor> is my jam! ) they quickly discovered an array of mutual interests and became friends. Having overcome Despacito and ETH, they continue to drink beer, discuss politics, and play cricket together happily ever after.
              </Trans></p>
          </>
        </div>
      </section >
    </div>
    
  );
}

export default WeddingParty;