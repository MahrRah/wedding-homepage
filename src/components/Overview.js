import React from 'react';
import '../assets/css/main.css'

import { useTranslation } from "react-i18next";
function Overview() {
    const { t } = useTranslation(["overview", "common"]);


    return (
        <div id="main">
            <article class="post featured">
                <header class="major">
                    <span class="date">{t("overview:date")}</span>
                    <h2><a href="#">{t("overview:welcome")}</a></h2>
                    <p> {t("storyText")}</p>
                </header>
                <a href="#" class="image main"><img src="images/pic01.jpg" alt="" /></a>
                <ul class="actions special">
                    <li><a href="#" class="button large">{t("ourStory")}</a></li>
                </ul>
            </article>
        </div>
    );
}

export default Overview;