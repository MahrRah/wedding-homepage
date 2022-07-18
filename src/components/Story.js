
import React from 'react';
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";


function Details() {
  const { t } = useTranslation(["common"]);

  return (
    <div id="main">

      <section className="posts">
        <article>
          <header>
            <span className="date">November 17, 2021</span>
            <h2><a href="#">The day off</a></h2>
          </header>
          <a href="#" className="image fit"><img src={require("../images/dayoff.jpeg")} alt="" /></a>
        </article>
        <article>
          <header>
            <span className="date">November 17, 2021</span>
            <h2><a href="#">Proposal add on</a></h2>
          </header>
          <a href="#" className="image fit"><img src={require("../images/proposal2.jpeg")} alt="" /></a>
        </article>
        <article>
          <header>
            <span className="date">April 18, 2017</span>
            <h2><a href="#">Save the date </a> </h2>
          </header>
          <a href="#" className="image fit"><img src={require("../images/savethedate.jpeg")} alt="" /></a>
        </article>
        <article>
          <header>
            <span className="date">April 18, 2017</span>
            <h2><a href="#">Save the date </a> </h2>
          </header>
          <a href="#" className="image fit"><img src={require("../images/savethedate.jpeg")} alt="" /></a>
        </article>
      </section>
    </div>
  );
}

export default Details;
