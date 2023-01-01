import React from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'


function QuestOverview() {
    const { t } = useTranslation(["common", "overview"]);

    return (
        <div id="main">
            <section className="post">

                <h1>The Side Quest</h1>
                <p>Wanna join the Quest during this wedding? <br/> Because hidden through out this website are 5 side quests or easter eggs of our wedding.
                    If you find them, solve them and you might win the final price at the event 😏 
                    <br/>
                    <br/>
                    Rules:
                    <ul>
                        <li>All submissions have to be done in a final mail to <a href="mailto:thegrosjeans.2023@gmail.com">thegrosjeans.2023@gmail.com</a> by 22:00 </li>
                        <li>We dont talk about the side quest till 22:00</li>
                        <li>All quest have to have screenshot/picture prove</li>
                        <li>If the poeple who are part of the quest realize you are working on the quest you will get disqullified.</li>
                    </ul>
                </p>
            </section>
        </div>
    );
}

export default QuestOverview;