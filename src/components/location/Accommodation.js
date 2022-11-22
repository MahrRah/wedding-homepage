import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function Accommodation() {

  const { t } = useTranslation(["location"]);

  const Hotel = ({ image, text, link, linkText, location, price, distance }) => {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <LightGallery
            speed={500} >
            <img src={image[0]} style={{ width: "30%", margin: "10px" }} alt="" />
            <img src={image[1]} style={{ width: "30%", margin: "10px" }} alt="" />
            <img src={image[2]} style={{ width: "30%", margin: "10px" }} alt="" />
          </LightGallery>
        </div>
        <br />
        <p>{text}</p>
        <div className="row gtr-uniform">
          <ul>
            <li><a href={link} target="_blank">{linkText}</a></li>
            <li><b>{t('location:city')}:</b> {location}</li>
          </ul>
        </div>
        <p><b>Please make sure to book your room yourself! We will have a blocker in place for a certain number of room, this is however not equivalen with a booking.</b></p>
        <hr />
      </div>
    );
  }
  let images = [require("../../images/hotel1.jpg"), require("../../images/hotel2.jpg"), require("../../images/hotel3.jpg")]
  return (

    <div>
      <h2>{t('location:accomodation')}</h2>
      <h3>{t('location:mainHotel')}</h3>
      <Hotel image={images}
        text={t('location:mainHotelText')}
        link={'https://www.viennahouse.com/en/zur-bleiche-schaffhausen/the-hotel/overview.html'}
        linkText={"Vienna House zur Bleiche Schaffhausen"}
        location={"Schafhausen"} />
    </div>

  );
}

export default Accommodation;