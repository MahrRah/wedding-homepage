
import React from 'react';
import '../../assets/css/main.css'
import Schedule from "./Schedule.js"
import { useTranslation } from "react-i18next";
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lg-zoom.css';
import LightGallery from 'lightgallery/react';
function Details() {
  const { t } = useTranslation(["common", "details"]);
  // lightGallery(document.querySelector('.medium-zoom-demo'), {
  //   // Target all images
  //   selector: '.blog-images',
  //   // Add medium zoom plugin
  //   plugins: [lgMediumZoom],
  // });
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{t("details:detailsTitel")}</h1>
        </header>
        <h2>{t("details:scheduleTitel")}</h2>
        <p>{t("details:scheduleText")}</p>
        <Schedule />
        <hr />
        <h2>{t("details:gift")}</h2>
        <p>{t("details:giftsText")}</p>
        <hr />
        <h2>{t("details:eveningContribution")}</h2>
        <p>{t("details:eveningContributionText")}</p>
        <blockquote> Contact: Priska und Christian</blockquote>
        <h2>{t("details:dresscode")}</h2>
        <div>
          <p>{t("details:dresscodeText")}</p>
          <span className="image fit">
            <LightGallery
              selector='.blog-images'
              plugins={[lgZoom]}>
              <figure
                lg-background-color="rgb(28 62 74)"
                className="blog-images"
                data-src={require("../../images/theme.png")}
                data-lg-size="1600-1126"
              >
                <img src={require("../../images/theme.png")} />
              </figure>
            </LightGallery>

          </span>
        </div>
      </section>
    </div>
  );
}

export default Details;
