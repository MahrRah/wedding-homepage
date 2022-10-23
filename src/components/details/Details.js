
import React from 'react';
import '../../assets/css/main.css'
import Schedule from "./Schedule.js"
import { useTranslation } from "react-i18next";

function Details() {
  const { t } = useTranslation(["common", "details"]);

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("details:detailsTitel")}</h1>
        </header>
        <h2>{t("details:scheduleTitel")}</h2>
        <p>{t("details:scheduleText")}</p>
        <Schedule />
        <hr />
        <h2>{t("details:gift")}</h2>
        <p>{t("details:giftsText")}</p>
        <hr />
        <h2>{t("details:eveningContribution")}</h2>
        <p>{t("details:eveningContributionText")}</p>
        <blockquote> Contact: Priska und Christian</blockquote>
        <h2>{t("details:dresscode")}</h2>
        <div>
          <p>{t("details:dresscodeText")}</p>
          <span className="image fit">
            <img src={require("../../images/theme.png")} alt="" />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Details;
