import React, { Component } from 'react';
import {useState} from 'react';
import { useTranslation } from "react-i18next";
import '../assets/css/main.css'

import Story from './Story.js'
function Overview (){
    const { t } = useTranslation(["common"]);
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
                        <p> {t("story:storyText")}</p>
                    </header>
                    <a href="#" className="image main"><img src="images/pic01.jpg" alt="" /></a>
                    <ul className="actions special">
                        <li><a className="button large" onClick={handleClick}>{t("story:ourStory")}</a></li>
                    </ul>
                </article>
                {isShown &&
                    <Story t={t}  />}
            </div>
        );
    }

export default Overview;