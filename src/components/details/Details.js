
import React , {useState,useCallback, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/main.css'
import Schedule from "./Schedule.js"
import { Trans, useTranslation } from "react-i18next";
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lg-zoom.css';
import LightGallery from 'lightgallery/react';
import ValeFish from '../eastereggs/ValeFish';

function Details() {
  const [animation, setAnimation] = useState(false);
  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event;
    if (keyCode === 13 || (keyCode >= 65 && keyCode <= 90)) {
      setAnimation(() => true);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const DetailSections = ({ side, titel, imageSize, text, image }) => {
    return (
      <>
        <span className={side} style={{ width: imageSize }}>
          <LightGallery
            selector='.blog-images'
            plugins={[lgZoom]}>
            <figure
              lg-background-color="rgb(28 62 74)"
              className="blog-images"
              data-src={image}
              data-lg-size="1600-1126"
            >
              <img src={image} />
            </figure>
          </LightGallery>
        </span>
        <h2>{titel}</h2>
        <p style={{ textAlign: "left", float: side, }}>{text}</p>
      </>);
  };

  const textGift = <Trans i18nKey="details:giftsText" components={{
    location_anchor: <a href="https://www.basecampexplorer.com/kenya/hotels/basecamp-masai-mara/" target="_blank" style={{ textDecoration: "underline", fontWeight: "bold" }} />
  }} >The most important thing to us is that you are able to celebrate with us on our wedding day. \n However, if you wish to give a gift, please do not waste your time with overthinking about an adequate gift. You could already make us immensely happy by even a small contribution towards our honeymoon.\n We both were planning on doing something special for this occastion and given our love for animals and nature, we decided to go on a trip to the <location_anchor>wildlife conservation Masai Mara in Kenya</location_anchor>. And maybe, only maybe, the brides dream of seeing her favourite animal in real live will become true!,
  </Trans>

  const { t } = useTranslation(["common", "details"]);
  return (<>
    {animation && <ValeFish />}
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("details:detailsTitel")}</h1>
        </header>
        <p>{t("details:detailsText")}</p>
        <h2>{t("details:scheduleTitel")}</h2>
        <p>{t("details:scheduleText")}</p>
        <Schedule />
        <hr />
        <div>
          <DetailSections side="image left" titel={t("details:dresscode")} text={t("details:dresscodeText")} image={require("../../images/theme.png")} imageSize="1200" />
        </div>
        <div>
          <DetailSections side="image right" titel={t("details:gift")} text={textGift} image={require("../../images/masai-mara.jpg")} imageSize="100" />
        </div>
        <hr />
        <h2>{t("details:eveningContribution")}</h2>
        <Trans i18nKey="details:eveningContributionText" components={{
          contacts_anchor: <Link to="/contact#top" preventScrollReset={false} style={{ textDecoration: "underline", fontWeight: "bold" }} />
        }}>
          If you would wish to contribute with something particular to the evening program, please reach out to our <contacts_anchor>best man or  maid of honor </contacts_anchor>.
        </Trans>
      </section>
    </div>
  </>
  );
}

export default Details;
