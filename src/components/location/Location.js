
import React from 'react';
import '../../assets/css/main.css'

//Components

import Accommodation from './Accommodation';
import Venue from './Venue';

import { useTranslation } from "react-i18next";

function Location() {
  const { t } = useTranslation(["location","common"]);

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t('common:location')}</h1>
        </header>
        <Venue />
        <Accommodation />
      </section>
    </div>
  );
}

export default Location;