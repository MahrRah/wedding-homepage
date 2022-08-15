
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';
function Contact() {
  const { t } = useTranslation(["common"]);


  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>Contact</h1>
        </header>
        <p>Wir bitten euch am Tag der hochzeit bei fragen auch nur noch an die Trauzeugen oder unsere Eltern zu wenden.</p>
        <dl>
          <dt>Item 1</dt>
          <dd>
            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
          </dd>
          <dt>Item 2</dt>
          <dd>
            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
          </dd>
          <dt>Item 3</dt>
          <dd>
            <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
          </dd>
        </dl>

      </section>
      {/* <Map /> */}
    </div>
  );
}

export default Contact;