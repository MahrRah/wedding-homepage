import React from 'react';
import '../../assets/css/main.css'
import { useTranslation } from "react-i18next";


function PlusOneForm() {
    const { t } = useTranslation(["rsvp","common"]);

    return (
        <>
            <h3>{t("rsvp:plusOne")}</h3>
            <div className="row gtr-uniform">
                <div className="col-6 col-12-small">
                    <input type="radio" id="bringsPlusOne-true" name="bringsPlusOne" value="yes" checked={this.state.bringsPlusOne === "yes"} onChange={this.onChange} />
                    <label htmlFor="bringsPlusOne-true">{t("rsvp:withPlusOne")}</label>
                </div>
                <div className="col-6 col-12-small">
                    <input type="radio" id="bringsPlusOne-false" name="bringsPlusOne" value="no" checked={this.state.bringsPlusOne === "no"} onChange={this.onChange} />
                    <label htmlFor="bringsPlusOne-false">{t("rsvp:withoutPlusOne")}</label>
                </div>
                {this.state.bringsPlusOne === "yes" &&
                    <>
                        <div className="col-6 col-12-xsmall">
                            <input type="text" name="firstname" id="firstname-plusone" value={this.state.plusOne.firstname} onChange={this.onChangePlusOne} />
                            <label className="input-label">{t("common:firstName")}</label>
                        </div>
                        <div className="col-6 col-12-xsmall">
                            <input type="text" name="lastname" id="lastname-plusone" value={this.state.plusOne.lastname} onChange={this.onChangePlusOne} />
                            <label className="input-label">{t("common:lastName")}</label>
                        </div>
                        <div className="col-12">
                            <select name="food" id="food" value={this.state.plusOne.food} onChange={this.onChangePlusOne}>
                                <option value="0">{t("rsvp:mealOptions")}</option>
                                <option value="1">{t("rsvp:noRestictions")}</option>
                                <option value="2">{t("rsvp:vegetarian")}</option>
                                <option value="3">{t("rsvp:glutenfree")}</option>
                            </select>
                        </div></>}
            </div><hr /></>

    );
}

export default PlusOneForm;