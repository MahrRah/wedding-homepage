import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';
import Details from './Details.js'
import Overview from './Overview';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createMemoryHistory } from 'history';
function Navigation() {
  const { t } = useTranslation(["common"]);
  const history = createMemoryHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (

      <nav id="nav">
        <ul className="links">
          <li className="active"> <Link to="/">{t('overview')}</Link></li>
          <li> <Link to="/details">{t('details')}</Link></li>
          <li> <Link to="/location">{t('location')}</Link></li>
          <li> <Link to="/gallery">{t('gallery')}</Link></li>
          <li> <Link to="/rsvp">{t('rsvp')}</Link></li>
        </ul>
        <ul class="icons">
							<li><a href="#" class="icon brands fa-twitter" onClick={() => changeLanguage('en')}><span class="label">{t('common:de')}</span></a></li>
							<li><a href="#" class="icon brands fa-facebook-f" onClick={() => changeLanguage('de')}><span class="label" >{t('common:en')}</span></a></li>
						</ul>
      </nav>
  );
}

export default Navigation;