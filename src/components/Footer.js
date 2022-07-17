import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';

function Footer() {
  const { t } = useTranslation(["common"]);

  return (
    <footer id="footer">
      <section>
        <section>
          <h3>{t('email')}</h3>
          <p><a href="mailto:thegrosjeans.2023@gmail.com">thegrosjeans.2023@gmail.com</a></p>
        </section>
        <section>
          <h3>{t('phone')}</h3>
          <p><a href="tel:0041794345509">Mahra: 079 434 55 09</a></p>
          <p><a href="tel:0041767024612">Valentin: 076 702 46 12</a></p>
        </section>
      </section>
      <section className="split contact">
        <section className="alt">
          <h3>{t('address')}</h3>
          <p> Tamara Rahimi <br />
          Valentin Grosjean, <br />
            Luegislandstrasse 78 ,<br />
            8051 Zürich <br />
            Schweiz </p>
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
      </section>
    </footer>
  );
}

export default Footer;