
import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../i18n.js';

function Details() {
  const { t } = useTranslation(["common"]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div id="main">
      <section class="post">
        <header class="major">
          <h1>Ceremonie<br />
            Details</h1>
        </header>
        <h2>Schedule</h2>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code:
          Finally, this is a <a href="#">link</a>.</p>
        <hr />
        <h2>RSVP Form</h2>

        <form method="post" action="#">
          <div class="row gtr-uniform">
            <div class="col-6 col-12-xsmall">
              <input type="text" name="demo-name" id="demo-name" value="" placeholder="First Name" />
            </div>
            <div class="col-6 col-12-xsmall">
              <input type="email" name="demo-email" id="demo-email" value="" placeholder="Last Name" />
            </div>
            <div class="col-12">
              <select name="Food Options" id="food-options">
                <option value="">- Meal options -</option>
                <option value="1">Vegarian</option>
                <option value="1">Vegan</option>
                <option value="1">Gluten free</option>
                <option value="1">No Dietary restirctions</option>
              </select>
            </div>
            <h5>Plus One</h5>
            <div class="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="demo-priority" checked />
              <label for="demo-priority-low">Yes</label>
            </div>
            <div class="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="demo-priority" />
              <label for="demo-priority-normal">No</label>
            </div>
            <div class="col-12">
              <textarea name="demo-message" id="demo-message" placeholder="Additional Notes" rows="3"></textarea>
            </div>
            <div class="col-12">
              <ul class="actions">
                <li><input type="submit" value="Send Message" class="primary" /></li>
                <li><input type="reset" value="Reset" /></li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Details;