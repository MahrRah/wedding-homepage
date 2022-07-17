import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';

function Footer() {
  const { t } = useTranslation(["common"]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <footer id="footer">
      <section className="split contact">
        <section className="alt">
          <h3>{t('address')}</h3>
          <p>Luegislandstrasse 78 ,<br />
            8051 Zürich <br />
            Schweiz </p>
        </section>
      </section>
      <section>
        <section>
          <h3>{t('email')}</h3>
          <p><a href="#">     thegrosjeans.2023@gmail.com</a></p>
        </section>
        <section>
          <h3>{t('phone')}</h3>
          <p><a href="#">(000) 000-0000</a></p>
        </section>
      </section>
      <section className="split contact">
        <section>
          <h3>{t('sozialNetworks')}</h3>
          <ul className="icons alt">
            <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/MahrRah/webapp-react-wedding" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
          </ul>
        </section>
        {/* <section >
          <h3>{t('common:languageSelector')}</h3>
          <button onClick={() => changeLanguage('de')}>{t('common:de')}</button>
          <button onClick={() => changeLanguage('en')}>{t('common:en')}</button>
          </section> */}
      </section>
    </footer>
  );
}

export default Footer;