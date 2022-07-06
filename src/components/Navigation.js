import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
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
  return (

      <nav id="nav">
        <ul class="links">
          <li class="active"> <Link to="/">{t('overview')}</Link></li>
          <li> <Link to="/details">{t('details')}</Link></li>
          <li> <Link to="/location">{t('location')}</Link></li>
          <li> <Link to="/gallery">{t('gallery')}</Link></li>
        </ul>
      </nav>
  );
}

export default Navigation;