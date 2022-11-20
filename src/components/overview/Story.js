
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
          <p>{titel}</p>
        </header>
        <div  style={{ textAlign: "center"}}>
        <a className="image fit"><img src={image} alt="" /></a>
        </div>
      </article>
    );
  };
  return (
    <div id="main">
      <Article date={"November 2021"} titel={"After 13 years we wanna make it offical"} image={require("../../images/us.JPG")} />
   </div>
  );
}

export default Story;
