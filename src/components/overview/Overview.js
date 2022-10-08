import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'

import Story from './Story.js'
import CountdownTimer from '../countdown/CountdownTimer.js'


function Overview() {
    const { t } = useTranslation(["common", "overview"]);
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);

    };

    const target = new Date("September 30, 2023 00:00:00").getTime()

    return (
        <div id="main">
            <article className="post featured">
                <header className="major">
                    <span className="date">{t("overview:date")}</span>
                    <h2>{t("overview:welcome")}</h2>
                    <p> {t("overview:introText")}</p>
                </header>
                {/* <a href="#" className="image main"><img src="../images/pic01.jpg" alt="" /></a> */}
                <ul className="actions special">
                    <li><a className="button large" onClick={handleClick}>{t("story:ourStory")}</a></li>
                </ul>
            </article>
            {isShown &&
                <Story t={t} />
            }
            <section className="post featured">
                <h3>{t("overview:countdownTitel")}</h3>
                <CountdownTimer targetDate={target} targetMessage={t("overview:countdownFinalMessage")} />
            </section>
            <section className="post">
                <h2>{t("overview:contact")}</h2>
                <p>{t("overview:contactText")}</p>
            </section>
        </div>
    );
}

export default Overview;