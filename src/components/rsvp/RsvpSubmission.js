import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";


function RsvpSubmission() {
  const { t } = useTranslation(["rsvp"]);

  return (
    <div className="row gtr-uniform"> 
    <div className="col-4"><span className="image fit"><img src={require("../../images/send.gif")} alt="" /></span></div>
    <p>{t("rsvp:submittedRsvpText")}</p>
        
    </div>
  );
}

export default RsvpSubmission;