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
    <section>
      <form method="post" action="#">
        <div class="fields">
          <div class="field">
            <label for="name">{t("common:name")}</label>
            <input type="text" name="name" id="name" />
          </div>
          <div class="field">
            <label for="email">{t("common:email")}</label>
            <input type="text" name="email" id="email" />
          </div>
          <div class="field">
            <label for="message">{t("common:message")}</label>
            <textarea name="message" id="message" rows="3"></textarea>
          </div>
        </div>
        <ul class="actions">
          <li><input type="submit" value={t('send')} /></li>
        </ul>
      </form>
    </section>
    <section class="split contact">
      <section class="alt">
        <h3>{t('address')}</h3>
        <p>Steinerstrasse 501,<br />
        8253 Diessenhofen <br/>
        Schweiz </p>
      </section>
      <section>
        <h3>{t('phone')}</h3>
        <p><a href="#">(000) 000-0000</a></p>
      </section>
      <section>
        <h3>{t('sozialNetworks')}</h3>
        <ul class="icons alt">
          <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="https://github.com/MahrRah/webapp-react-wedding" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
        </ul>
      </section>
      <section class="alt">
      </section>
    </section>
            <section>
              <h3>{t('common:languageSelector')}</h3>
              <button onClick={() => changeLanguage('de')}>{t('common:de')}</button>

              <button onClick={() => changeLanguage('en')}>{t('common:en')}</button>
              </section>
  </footer>
  );
}

export default Footer;