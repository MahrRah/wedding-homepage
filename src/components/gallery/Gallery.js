import React from 'react';
import '../../assets/css/main.css'

import LightGallery from 'lightgallery/react';
import { Trans, useTranslation } from "react-i18next";
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
                <Trans i18nKey="gallery:galleryText" components={{
                    gallery_anchor: <a href="/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />
                }} >
                    Sneak peak of some of the pictures taken at the wedding. For the complete gallery of all pictures taken please follow the <gallery_anchor>link</gallery_anchor>.
                </Trans>
                {/* <span>{t("gallery:galleryText")} <a style={{ textDecoration: "underline" }}>{t("gallery:hereLink")}</a></span> */}
                <div style={{ textAlign: "center" }}>

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
