
import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";


function Story() {
  const { t } = useTranslation(["common"]);
  const Article = ({ date, titel, image }) => {
    return (
      <article>
        <header>
          <span className="date">{date}</span>
          <h2><a href="#">{titel}</a></h2>
        </header>
        <div  style={{ textAlign: "center"}}>

        <a  className="image fit"><img src={image} alt="" /></a>
        </div>
      </article>
    );
  };
  return (
    <div id="main">
      <Article date={"November 17, 2021"} titel={"After 13 years we wanna make it offical"}image={require("../../images/us.JPG")} />
      {/* <section className="posts"> */}
      {/* <Article date={"TBD TBD, 1996"} titel={"Small Mahra"} image={require("../../images/smallTamara.jpg")} />
      <Article date={"November 17, 2021"} titel={"Smol Valentin"} image={require("../../images/smolVale.png")} />
      <Article date={"April 18, 2017"} titel={"First day of school"} image={require("../../images/schoolMahra.jpg")} />
      <Article date={"April 18, 2017"} titel={"First day of school"} image={require("../../images/schoolVale.png")} />
      </section>
      <Article date={"November 17, 2021"} titel={"Proposal add on"}image={require("../../images/proposal2.jpeg")} /> */}
    </div>
  );
}

export default Story;
