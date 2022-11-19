import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";

function Accommodation() {

  const { t } = useTranslation(["location"]);

  const Hotel = ({ image, text, link, linkText, location, price, distance }) => {
    return (
      <div>
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <br />
        <p>{text}</p>
        <div className="row gtr-uniform">
          <ul>
            <li><a href={link} target="_blank">{linkText}</a></li>
            <li><b>{t('location:city')}:</b> {location}</li>
            <li><b>{t('location:price')}:</b> {price}</li>
            <li><b>{t('location:distanceVenue')}:</b> {distance}</li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
  return (
    <div>
      <h2>{t('location:accomodation')}</h2>
      <h3>{t('location:mainHotel')}</h3>
      <Hotel image={require("../../images/vienna-house.jpg")} 
             text={t('location:mainHotelText')} 
             link={'https://www.viennahouse.com/en/zur-bleiche-schaffhausen/the-hotel/overview.html'} 
             linkText={"Vienna House zur Bleiche Schaffhausen"} 
             location={"Schafhausen"} 
             price={"ab 170.00"} 
             distance={"20min"} />
    </div>

  );
}

export default Accommodation;