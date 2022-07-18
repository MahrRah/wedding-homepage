import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import '../assets/css/main.css'

function Accommodation() {
  return (
    <div>
      <h2>Accommodation</h2>
      <h3>Main Hotel</h3>
      <div><span className="image left"><img src={require("../images/vienna-house.jpg")} alt="" /></span>
        <p>small description</p>
        <ul>
          <li><a href='https://www.viennahouse.com/en/zur-bleiche-schaffhausen/the-hotel/overview.html'>Vienna House zur Bleiche Schaffhausen </a></li>
          <li><b>Ort:</b>Schaffhausen</li>
          <li><b>Preis:</b> 150 CHF</li>
          <li><b>Distanze</b> 10min</li>
        </ul>
      </div>
      <hr />
      <h4>Other Hotels close by</h4>
      <div><span className="image right"><img src={require("../images/rheingold.jpg")} alt="" /></span>
        <p>small description</p>
        <ul>
          <li><a href='https://www.hotelrheingold.de/das-hotel/'>Hotel Rheingold in Gailingen </a></li>
          <li><b>Ort:</b>Gailingen am Hochrhein,</li>
          <li><b>Preis:</b> 130 CHF</li>
          <li><b>Distanze</b> XXmin</li>
        </ul>
      </div>
      <div><span className="image left"><img src={require("../images/alterheinmuehle.jpg")} alt="" /></span>
      <p>small description<br/></p>
        <ul>
          <li><a href='https://alte-rheinmuehle.ch/hotel/'>Hotel Alte Rheinmuehle </a></li>
          <li><b>Ort:</b>Büsingen am Hochrhein</li>
          <li><b>Preis:</b> 220 CHF</li>
          <li><b>Distanze</b> XXmin</li>
        </ul>
      </div>
    </div>

  );
}

export default Accommodation;