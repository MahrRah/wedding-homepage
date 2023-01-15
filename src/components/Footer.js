import React, {useState } from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import ValeFish from './eastereggs/ValeFish';

function Footer() {
  const { t } = useTranslation(["common"]);
  const [animation, setAnimation] = useState(false);
  const onClick = () => {
    console.log("test:")
    setAnimation(() => true);
  }
  return (
    <>
    {animation &&
      <ValeFish></ValeFish>}
    <footer id="footer">
        <section>
          <section>
            <h3>{t('email')}</h3>
            <p><a href="mailto:thegrosjeans.2023@gmail.com">thegrosjeans.2023@gmail.com</a></p>
          </section>
          <section>
            <h3>{t('phone')}</h3>
            <p><a href="tel:0041767024612"> Valentin: +41 76 702 46 12</a> <br /> <a href="tel:0041794345509">Mahra: +41 79 434 55 09</a></p>
          </section>
          <section>
            <h3>IBAN</h3>
            <p>CH89 0900 0000 1605 4916 1</p>
          </section>
        </section>
        <section className="split contact">
          <section className="alt">
            <h3>{t('address')}</h3>
            <p> Tamara Rahimi <br />
              Valentin Grosjean, <br />
              Luegislandstrasse 78,<br />
              8051 Zürich <br />
              Schweiz </p>
          </section>
          <section>
            <h3>{t('sozialNetworks')}</h3>
            <ul className="icons alt">
              <li><a href="/instagram" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="https://github.com/MahrRah/wedding-homepage" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
              <li><a className="icon alt fa-question" onClick={onClick}><span className="label">Quest</span></a></li>
            </ul>
          </section>
        </section>
      </footer>
      </>
  );
}

export default Footer;