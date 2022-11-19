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
                <header className="major">
                    <h1>{t("gallery:galleryTitel")}</h1>
                </header>
                <span>{t("gallery:galleryText")} <a style={{ textDecoration: "underline"}}>{t("gallery:hereLink")}</a></span>
                <div style={{ textAlign: "center"}}>

                    <LightGallery
                        speed={500}
                    >
                        <a href={require("../../images/pic02.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/pic01.jpg")} />
                        </a>
                        <a href={require("../../images/pic02.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/pic03.jpg")} />
                        </a>
                        <a href={require("../../images/pic01.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/pic04.jpg")} />
                        </a>
                        <a href={require("../../images/pic01.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/pic02.jpg")} />
                        </a>
                        <a href={require("../../images/pic01.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/pic03.jpg")} />
                        </a>
                        <a href={require("../../images/pic01.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/pic04.jpg")} />
                        </a>
                    </LightGallery>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
