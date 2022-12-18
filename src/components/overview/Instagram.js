import React from 'react';
import { Trans, useTranslation } from "react-i18next";
import '../../assets/css/main.css'


function Instagram() {
    const { t } = useTranslation(["common", "overview"]);

    return (
        <div id="main">
            <section className="post">
                <span className="image left" style={{ width: 300 }}><img src={require("../../images/insta.jpg")} alt="" /></span>
                <h3 style={{ textAlign: "left" }}>{t("common:instagramTitle")}</h3>
                <p style={{ height: 300, textAlign: "left" }}>{t("common:instagramText")}</p>
            </section>
        </div>
    );
}

export default Instagram;