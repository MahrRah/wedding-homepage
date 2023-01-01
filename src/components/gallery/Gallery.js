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
                {/* <Trans i18nKey="gallery:galleryText" components={{
                    gallery_anchor: <a href="/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />
                }} >
                    Sneak peak of some of the pictures taken at the wedding. For the complete gallery of all pictures taken please follow the <gallery_anchor>link</gallery_anchor>.
                </Trans> */}
                <div style={{ textAlign: "center" }}>

                    <LightGallery
                        speed={500}
                    >
                        <a href={require("../../images/gallery/us_1.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_1_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_2.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_2_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_3.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_3_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_4.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_4_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_5.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_5_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_6.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_6_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_7.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_7_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_9.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_9_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_8.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_8_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_10.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_10_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_11.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_11_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_12.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_12_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_13.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_13_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_14.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_14_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_15.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_15_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_16.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_16_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_17.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_17_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_18.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_18_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_19.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_19_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_20.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_20_tn.jpg")} />
                        </a>
                        <a href={require("../../images/gallery/us_21.jpg")}>
                            <img style={{ width: "30%", margin: "14px", display: "inline-block" }} alt="img1" src={require("../../images/gallery/us_21_tn.jpg")} />
                        </a>
                       
                    </LightGallery>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
