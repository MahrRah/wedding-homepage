import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation(["common"]);

  return (
    <nav id="nav">
    <ul class="links">
      <li class="active"><a href="index.html">{t('overview')}</a></li>
      <li><a href="details.html">{t('details')}</a></li>
      <li><a href="elements.html">{t('location')}</a></li>
      <li><a href="generic.html">{t('gallery')}</a></li>
   </ul>
  </nav>
  );
}

export default Navigation;