
import React from 'react';
import '../../assets/css/main.css'

//Components
import Map from './Map.js'
import Accommodation from './Accommodation';
import Venue from './Venue';

import { useTranslation } from "react-i18next";

function Location() {
  const { t } = useTranslation(["location"]);

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t('location:titel')}</h1>
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