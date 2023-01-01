import React from 'react';
import '../../assets/css/main.css'
import { Trans, useTranslation } from "react-i18next";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function Accommodation() {

  const { t } = useTranslation(["location"]);

  let images = [require("../../images/hotel1.jpg"), require("../../images/hotel2.jpg"), require("../../images/hotel3.jpg")]
  const code = "'Hochzeit: Mahra & Valentin'"

  return (
    <div>
      <h2>{t('location:accomodation')}</h2>
      <h3>{t('location:mainHotel')}</h3>
      <div>
        <div style={{ textAlign: "center" }}>
          <LightGallery
            speed={500} >
            <img src={images[0]} style={{ width: "30%", margin: "10px" }} alt="Hotel Image 1" />
            <img src={images[1]} style={{ width: "30%", margin: "10px" }} alt="Hotel Image 2" />
            <img src={images[2]} style={{ width: "30%", margin: "10px" }} alt="Hotel Image 3" />
          </LightGallery>
        </div>
        <br />
        <Trans i18nKey="location:mainHotelText" components={{
          code:code,
          site_anchor: <a href="https://www.viennahouse.com/en/zur-bleiche-schaffhausen/the-hotel/overview.html" target="_blank" style={{ textDecoration: "underline",fontWeight: "bold"}}/>
        }} >
          After our big day we will retreat to the <site_anchor>tttt</site_anchor> for the night. The hotel is right next to the Train station and within 5min walk you will be in the heart of Schaffhausens old town.
          We have arranged special rats for our guests so make sure when booking to mention our wedding code {{ code }}. The hotels also has public parking next door and is wheelchair accessible.
          For guests staying in this hotel, we have organised shuttels service to and from the venue to the hotel.\n
        </Trans>
        <hr />
      </div>
    </div>

  );
}

export default Accommodation;