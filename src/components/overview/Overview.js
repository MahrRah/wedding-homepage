import React, { Component } from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'

import Story from './Story.js'
function Overview() {
    const { t } = useTranslation(["common", ""]);
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);

    };

    return (
        <div id="main">
            <article className="post featured">
                <header className="major">
                    <span className="date">{t("overview:date")}</span>
                    <h2>{t("overview:welcome")}</h2>
                    <p> {t("overview:introText")}</p>
                </header>
                <a href="#" className="image main"><img src="../images/pic01.jpg" alt="" /></a>
                <ul className="actions special">
                    <li><a className="button large" onClick={handleClick}>{t("story:ourStory")}</a></li>
                </ul>
            </article>
            {isShown &&
                <Story t={t} />}
            <section className="post">
                <h2>Infos</h2>
                <p>Hier werden wir euch so gut es geht auf dem laufenden halten über den zeitplan, Bilder oder mehr dinge die ihr wissen müsst.</p>
                <hr />
                <h2>Kontakte</h2>
                <p>Wir bitten euch am Tag der hochzeit bei fragen auch nur noch an die Trauzeugen oder unsere Eltern zu wenden. Die Kontakt personen für fragen am tag vor und and er hochzeit sind unten gelisted</p>
                <dl>
                    <dt>Trauzeugen</dt>
                    <dd>
                        <p>Meldet euch bei unseren Trauzeugen bei Fragen zu: Program, Abendprogram, Gastgeschenk oder Vendor notfällen</p>
                    </dd>
                    <dt>Eltern</dt>
                    <dd>
                        <p>Meldet euch bei unseren Eltern bei Fragen zu: Transport fragen, Hilfe bei Anlieferung</p>
                    </dd>
                    <dt>Brautpaar</dt>
                    <dd>
                        <p>Meldet euch nicht beim Brautpaar!</p>
                    </dd>
                </dl>
                <hr />
            </section>
        </div>
    );
}

export default Overview;