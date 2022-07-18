
import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';
import Map from './Map.js'
import Accommodation from './Accommodation';
import Venue from './Venue';
function Location() {
  const { t } = useTranslation(["common"]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>Location</h1>
        </header>
        <Venue />
        <hr />
        <Accommodation />
        <hr />
      </section>
      {/* <Map /> */}
    </div>
  );
}

export default Location;