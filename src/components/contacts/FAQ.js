
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n.js';


function Faq() {
  const { t } = useTranslation(["common"]);


  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>FAQ</h1>
        </header>

        <h3>Are there parking spot at the location?</h3>
        <p>Yes there are. However, there will be a taxi service form and to the hotel. So there needs to be no fight on who will be the designated driver</p>

        <h3>Is the location wheelchair accessible?</h3>
        <p>Yes it is. You can drive the car all the way next to the ceremony location.</p>

        <h3>Can i bring a plus one if I dont have one on my RSVP form?</h3>
        <p> We would love celebrate our wedding with all the people who are most dear to us. Sometimes this unfortunetly means having to make cuts. So please understand if we are not able to accomodate every ones plus ones or family </p>
      </section>
      {/* <h3></h3>
      <p></p> */}
    </div>
  );
}

export default Faq;