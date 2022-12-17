import React from 'react';
import { useTranslation } from "react-i18next";
import '../../assets/css/main.css'


function Instagram() {
    const { t } = useTranslation(["common", "overview"]);

    return (
        <div id="main">
            <section className="post">
                <span className="image left" style={{ width: 300 }}><img src={require("../../images/insta.jpg")} alt="" /></span>
                <h3 style={{ textAlign: "left" }}>Wedding Hashtag</h3>
                <p style={{ height: 300, textAlign: "left" }}>Our wedding hashtag is <b>#thegrosjeans2023</b>. Post anything with that hashtag if you want us to fins it on instagram. To go to the hashtag, just scane the QR code in the image on the left.</p>
            </section>
        </div>
    );
}

export default Instagram;