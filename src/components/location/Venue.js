import React from 'react';
import VenueMap from './VenueMap.js'
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function Venue() {

  const { t } = useTranslation(["common", "location"]);

  return (
    <div>
      <h2>{t('location:venue')}</h2>
      <h3>{t('location:venueName')}</h3>
      <div>
        <div>

        <LightGallery
          speed={500} >
          <img className="image left" style={{ width: "35%", marginLeft: "20px" }} src={require("../../images/schupfen-see.jpeg")} alt="Wedding Venue" />
        </LightGallery>
        <p > {t('location:venueText')}</p>
          </div>
        <br/>
        <p style={{overflow: "hidden"}}> <b>{t('common:address')}:</b> <a href="https://g.page/GasthausSchupfen?share" target="_blank"><br /> Gasthaus Schupfen <br /> Steinerstrasse 501 <br /> 8253 Diessenhofen <br /><br /> </a></p>
      </div>
      <h4>{t('location:map')}</h4>
      <VenueMap />
      <hr />
    </div>
  );
}

export default Venue;