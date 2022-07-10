import React from 'react';
import '../assets/css/main.css'

import { useTranslation } from "react-i18next";
function Overview() {
    const { t } = useTranslation(["overview", "common"]);


    return (
        <div id="main">
            <article className="post featured">
                <header className="major">
                    <span className="date">{t("overview:date")}</span>
                    <h2><a href="#">{t("overview:welcome")}</a></h2>
                    <p> {t("storyText")}</p>
                </header>
                <a href="#" className="image main"><img src="images/pic01.jpg" alt="" /></a>
                <ul className="actions special">
                    <li><a href="#" className="button large">{t("ourStory")}</a></li>
                </ul>
            </article>
        </div>
    );
}

export default Overview;