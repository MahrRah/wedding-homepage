import React from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'


function Instagram() {
    const { t } = useTranslation(["common", "overview"]);

    return (
        <div id="main">
            <article className="post featured">
                <header className="major">
                    <span className="date">{t("overview:date")}</span>
                    <h2>{t("overview:welcome")}</h2>
                    <p> {t("overview:introText")}</p>
                </header>
                <a href="#" className="image main"><img src={require("../../images/insta.jpg")} alt="" /></a>
                </article>
        </div>
    );
}

export default Instagram;