import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";


function Venue() {

  const { t } = useTranslation(["common", "location"]);

  return (
    <div>
      <h2>{t('location:venue')}</h2>
      <h3>{t('location:venueName')}</h3>
      <div><span className="image left"><img src={require("../../images/schupfen-see.jpeg")} alt="" /></span>
        <p>{t('location:venueText')}</p>
        <p> <b>{t('common:address')}:</b> <a href="https://g.page/GasthausSchupfen?share" target="_blank"><br /> Gasthaus Schupfen <br /> Steinerstrasse 501 <br /> 8253 Diessenhofen <br /><br /> </a></p>
      </div>
      <h4>{t('location:map')}</h4>
      <span className="image fit"><img src={require("../../images/schupfen-map.png")} alt="" /></span>
      <hr />
    </div>
  );
}

export default Venue;