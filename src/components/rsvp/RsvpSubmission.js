import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";


function RsvpSubmission() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="row gtr-uniform"> 
    <p>You submitted great wup wup</p>
    <div className="col-4"><span className="image fit"><img src={require("../../images/sumbitted.png")} alt="" /></span></div>
                       
    </div>
  );
}

export default RsvpSubmission;