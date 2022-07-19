import React from 'react';
import '../assets/css/main.css'

function Venue() {
  return (
    <div>
      <h2>Venue</h2>
      <h3>Schupfen Rhyschüür</h3>
      <div><span className="image left"><img src={require("../images/schuur.jpg")} alt="" /></span>
        <p>Wup wup hier heiraten wir. It has limited parking</p>
        <p> <b>Adresse:</b> <br /> Gasthaus Schupfen <br /> Steinerstrasse 501 <br /> 8253 Diessenhofen <br /><br /></p>
      </div>
      <h4>Map</h4>
      <span className="image fit"><img src={require("../images/schupfen-map.png")} alt="" /></span>
    </div>
  );
}

export default Venue;