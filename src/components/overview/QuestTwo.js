import React from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'


function QuestTwo() {
    const { t } = useTranslation(["common", "overview"]);

    return (
        <div id="main">
            <section className="post">
                <h2>Second Quest</h2>
                <h3>Sneaky Pics</h3>
                <p>Find our guest named Janot. Janot is our longterm highschool friend, who has gone through alot of years with us. Janot is also very proud of his butt. Try to get a pic of your self taking a picture of pretending to grabing Janots butt without him realizing.</p>
            </section>
        </div>
    );
}

export default QuestTwo;