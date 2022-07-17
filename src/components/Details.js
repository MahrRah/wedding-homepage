
import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';
import RsvpRequest from './RsvpRequest.js'

function Details() {
  const { t } = useTranslation(["common"]);

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>Ceremonie<br />
            Details</h1>
        </header>
        <h2>Schedule</h2>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code:
          Finally, this is a <a href="#">link</a>.</p>
        <hr />
        <h2>Gifts</h2>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code:
          Finally, this is a <a href="#">link</a>.</p>
        <hr />
        <h2>Evening contributions</h2>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code:
          Finally, this is a <a href="#">link</a>.</p>
        <blockquote> Contact: Priska und Christian</blockquote>
        <h2>Dresscode</h2>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code:
          Finally, this is a <a href="#">link</a>.</p>
        <hr />
      </section>
    </div>
  );
}

export default Details;
