import React from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'


function QuestOne() {
    const { t } = useTranslation(["common", "overview"]);

    return (
        <div id="main">
            <section className="post">
                <h2>First Quest</h2>
                <h3>We give you hints, you find the person.</h3>
                <p>Find the person who this <a href="https://twitter.com/jodeldiplom15" target="_blank" style={{ textDecoration: "underline",fontWeight: "bold"}}>twitter</a> account belongs to and get on a picture with them </p>
            </section>
        </div>
    );
}

export default QuestOne;