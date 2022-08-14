import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";

function Accommodation() {

  const { t } = useTranslation(["location"]);

  return (
    <div>
      <h2>{t('location:accomodation')}</h2>
      <h3>{t('location:mainHotel')}</h3>
      <div><span className="image left"><img src={require("../../images/vienna-house.jpg")} alt="" /></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="row gtr-uniform">

          <ul>
            <li><a href='https://www.viennahouse.com/en/zur-bleiche-schaffhausen/the-hotel/overview.html' target="_blank">Vienna House zur Bleiche Schaffhausen </a></li>
            <li><b>{t('location:city')}:</b> Schaffhausen</li>
            <li><b>{t('location:price')}:</b> 150 CHF</li>
            <li><b>{t('location:distanceVenue')}:</b> 10 min</li>
          </ul>
        </div>
      </div>
      <hr />
      <h4>{t('location:otherHotels')}</h4>
      <div><span className="image right"><img src={require("../../images/rheingold.jpeg")} alt="" /></span>
        <p> <a href='https://www.hotelrheingold.de/das-hotel/' target="_blank">Hotel Rheingold in Gailingen </a> is a hotel in Gailingen am Hochrhein. Distance to the Veding venue is about XXmin car ride. On average the price of a rooms goes between XX-XX per night.<br /><br /></p>
        <div className="row gtr-uniform">
          <ul >
            <li><a href='https://www.hotelrheingold.de/das-hotel/' target="_blank">Hotel Rheingold in Gailingen </a></li>
            <li><b>{t('location:city')}:</b> Gailingen am Hochrhein,</li>
            <li><b>{t('location:price')}:</b> 130 CHF</li>
            <li><b>{t('location:distanceVenue')}:</b> XXmin</li>
            <li><b>{t('location:distanceHotel')}:</b> XXmin</li>
          </ul>
        </div>
      </div>
      <div><span className="image left"><img src={require("../../images/alterheinmuehle.jpeg")} alt="" /></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /></p>
        <div className="row gtr-uniform">
          <ul>
            <li><a href='https://alte-rheinmuehle.ch/hotel/' target="_blank">Hotel Alte Rheinmuehle </a></li>
            <li><b>{t('location:city')}:</b> Büsingen am Hochrhein</li>
            <li><b>{t('location:price')}:</b> 220 CHF</li>
            <li><b>{t('location:distanceVenue')}:</b> XXmin</li>
            <li><b>{t('location:distanceHotel')}:</b> XXmin</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Accommodation;