import React from 'react';
import '../../assets/css/main.css'


import { useTranslation } from "react-i18next";


function Gallery() {
    const { t } = useTranslation(["gallery"]);

    return (
        <div id="main">
            <section className="post">
                <h2>{t("gallery:galleryTitel")}</h2>
                <span>{t("gallery:galleryText")} <a>{t("gallery:hereLink")}</a></span>
                <span className="image fit"><img src="images/pic01.jpg" alt="" /></span>
                <div className="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic02.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic03.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic04.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic05.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic06.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic07.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic06.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic05.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic03.jpg")} alt="" /></span></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
