import React from 'react';
import '../../assets/css/main.css'

import LightGallery from 'lightgallery/react';
import { useTranslation } from "react-i18next";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function Gallery() {
    const { t } = useTranslation(["gallery"]);

    return (
        <div id="main">
            <section className="post">
                <h2>{t("gallery:galleryTitel")}</h2>
                <span>{t("gallery:galleryText")} <a>{t("gallery:hereLink")}</a></span>
                <span className="image fit"><img src="images/pic01.jpg" alt="" /></span>
                <div style={{ textAlign: "center"}}>

                <LightGallery
                    speed={500}
                    >
                    <a href={require("../../images/pic01.jpg")}>
                        <img style={{width:"30%",margin:"14px",display:"inline-block"}} alt="img1" src={require("../../images/pic02.jpg")} />
                    </a>
                    <a href={require("../../images/pic01.jpg")}>
                        <img style={{width:"30%", margin:"14px",display:"inline-block"}} alt="img1" src={require("../../images/pic03.jpg")} />
                    </a>
                    <a href={require("../../images/pic01.jpg")}>
                        <img style={{width:"30%", margin:"14px",display:"inline-block"}} alt="img1" src={require("../../images/pic04.jpg")} />
                    </a>
                    <a href={require("../../images/pic01.jpg")}>
                        <img style={{width:"30%",margin:"14px",display:"inline-block"}} alt="img1" src={require("../../images/pic02.jpg")} />
                    </a>
                    <a href={require("../../images/pic01.jpg")}>
                        <img style={{width:"30%", margin:"14px",display:"inline-block"}} alt="img1" src={require("../../images/pic03.jpg")} />
                    </a>
                    <a href={require("../../images/pic01.jpg")}>
                        <img style={{width:"30%", margin:"14px",display:"inline-block"}} alt="img1" src={require("../../images/pic04.jpg")} />
                    </a>
                </LightGallery>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
