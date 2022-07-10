
import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';

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
        <h2>Location</h2>
        <p>locatio absdkabdksadas;h;asd.</p>
        <hr />
        <p id="name"></p>
        <hr />
        <h2>Accomodation</h2>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code:.
          Finally, this is a <a href="#">link</a>.</p>
        <hr />
      </section>
    </div>
  );
}

export default Location;