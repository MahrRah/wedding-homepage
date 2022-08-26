import React, { Component } from 'react'
import '../../assets/css/main.css'
import { withTranslation } from 'react-i18next';
import RsvpSubmission from './RsvpSubmission';
import { t } from 'i18next';

class RsvpRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvpCode: "",
            submitted: false,
            error: false,
            updated: false,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            attending: "yes",
            booking: "yes",
            hotel: { rooms: 0, guests: 0, nights: 0, booking: "" },
            food: "0",
            language: "",
            plusOne: { firstname: "", lastname: "", food: "0", attending: "" },
            hasPlusOne: false,
            bringsPlusOne: "",
            children: [],
            hasChildren: false,
            bringsChildren: false,
            message: ""
        };
        localStorage.setItem('submitted', false);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitCode = this.handleSubmitCode.bind(this);
        this.isSubmitted = this.isSubmitted.bind(this);
        this.loadRsvpDataToState = this.loadRsvpDataToState.bind(this);
        this.onChangePlusOne = this.onChangePlusOne.bind(this);
        this.updateRsvp = this.updateRsvp.bind(this);
        this.isUpdated = this.isUpdated.bind(this);
        this.onChangeChild = this.onChangeChild.bind(this);
        this.onChangeHotel = this.onChangeHotel.bind(this);
    }

    onChange = (e) => {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
    }

    onChangePlusOne = (e) => {
        let state = this.state.plusOne
        state[e.target.name] = e.target.value
        this.setState({ plusOne: state });
    }

    onChangeHotel = (e) => {
        let state = this.state.hotel
        state[e.target.name] = e.target.value
        this.setState({ hotel: state });
    }

    onChangeChild = (e, idx) => {
        let children = this.state.children
        let child = children[idx];
        child[e.target.name] = e.target.value;
        children[idx] = child;
        this.setState({ children: children });
    }
    isSubmitted = () => {
        this.setState({ submitted: true })
    }
    isUpdated = () => {
        this.setState({ updated: true })
    }

    loadRsvpDataToState = (data) => {
        this.setState({ rsvpCode: data.rsvpCode, lastname: data.lastname, firstname: data.firstname, email: data.email, phone: data.phone, attending: data.attending, language: data.language, food: data.food, hotel: data.hotel, booking: data.hotel.booking, message: data.message })

        if (data.plusOne.length > 0) {

            this.setState({ hasPlusOne: true, bringsPlusOne: data.plusOne[0].attending, plusOne: data.plusOne[0] });
        }
        if (data.child.length > 0) {
            this.setState({ hasChildren: true, bringsChildren: data.child[0].attending, children: data.child })
        }
    }

    handleSubmitCode = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(` http://localhost:7071/api/rsvp/${this.state.rsvpCode}`, {
                method: "GET",
            });
            if (res.status === 200) {
                let body = await res.json();
                this.loadRsvpDataToState(body);
                this.isSubmitted()
                console.log(body)
            } else {
                console.log(res.status)
            }
        } catch (err) {
            console.log(err);
        }
    };

    updateRsvp = async (e) => {
        e.preventDefault();
        try {
            let updateBody = {
                "attending": this.state.attending,
                "food": this.state.food,
                "email": this.state.email,
                "phone": this.state.phone,
                "plusOne": [
                ],
                "child": [],
                "hotel": this.state.hotel,
                "language": this.state.language,
                "message": this.state.message,
            }
            console.log(this.state.booking)
            console.log(this.state.booking)
            updateBody.hotel.booking = this.state.booking;

            if (this.state.hasPlusOne && this.state.bringsPlusOne) {
                let plusOneBody = {
                    "firstname": this.state.plusOne.name,
                    "lastname": this.state.plusOne.lastname,
                    "food": this.state.plusOne.food,
                    "attending": this.state.bringsPlusOne
                }
                updateBody.plusOne.push(plusOneBody)
            }

            if (this.state.hasChildren && this.state.bringsChildren) {

                for (let i = 0; i < his.state.children; i++) {

                    updateBody.child.concat(this.state.children)
                }
            }

            const res = await fetch(` http://localhost:7071/api/rsvp/${this.state.rsvpCode}`, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateBody)
            });
            console.log(res);
            if (res.status === 200) {
                this.isUpdated();

            } else {
                console.log(`this state ${res.status}`);
            }
        } catch (err) {
            console.log(`Endpoint cant be reached: ${err}`);
        }
    }


    render() {
        return (
            <div id="main">
                <div>
                    <h2>{t("rsvp:rsvpTitel")}</h2>
                    <p>{t("rsvp:rsvpText")}</p>
                </div>
                {!this.state.submitted && !this.state.updated &&
                    <form method="post" onSubmit={this.handleSubmitCode}>
                        <h2>{t("rsvp:rsvpFormTitel")}</h2>
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="rsvpCode">{t("rsvp:rsvpCode")}</label>
                                <input type="text" name="rsvpCode" id="rsvpCode" placeholder={this.state.rsvpCode}
                                    onChange={this.onChange} />
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value={t('rsvp:submitCode')} /></li>
                        </ul>
                    </form>}
                {this.state.submitted && !this.state.updated &&
                    <form method="post" onSubmit={this.updateRsvp}>
                        <div className="col-4 col-12-small">
                            <input type="radio" id="attending-true" name="attending" value="yes" checked={this.state.attending == "yes"} onChange={this.onChange} />
                            <label htmlFor="attending-true">{t("rsvp:attending")}</label>
                        </div>
                        <div className="col-4 col-12-small">
                            <input type="radio" id="attending-false" name="attending" value="no" checked={this.state.attending == "no"} onChange={this.onChange} />
                            <label htmlFor="attending-false">{t("rsvp:notAttending")}</label>
                        </div>
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <input readOnly type="text" name="firstname" id="firstname" value={this.state.firstname} />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input readOnly type="text" name="lastname" id="lastname" value={this.state.lastname} />
                            </div>
                            <div className="col-12">
                                <select name="food" id="food" value={this.state.food} onChange={this.onChange}>
                                    <option value="0">{t("rsvp:mealOptions")}</option>
                                    <option value="1">{t("rsvp:noRestictions")}</option>
                                    <option value="2">{t("rsvp:vegetarian")}</option>
                                    <option value="3">{t("rsvp:glutenfree")}</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className="col-4 col-12-small">
                            <input type="radio" id="booking-true" name="booking" value="yes" checked={this.state.booking == "yes"} onChange={this.onChange} />
                            <label htmlFor="booking-true">{t("rsvp:attending")}</label>
                        </div>
                        <div className="col-4 col-12-small">
                            <input type="radio" id="booking-false" name="booking" value="no" checked={this.state.booking == "no"} onChange={this.onChange} />
                            <label htmlFor="booking-false">{t("rsvp:notAttending")}</label>
                        </div>
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <input type="text" name="rooms" id="hotel-rooms" placeholder="rooms" value={this.state.hotel.rooms} onChange={this.onChangeHotel} />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input type="text" name="guests" id="hotel-guests" placeholder="guests" value={this.state.hotel.guests} onChange={this.onChangeHotel} />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input type="text" name="nights" id="hotel-nights" placeholder="nights" value={this.state.hotel.nights} onChange={this.onChangeHotel} />
                            </div>
                        </div>
                        <hr />
                        <div className="row gtr-uniform">
                            <div className="col-12">
                                <select name="language" id="language" value={this.state.language} onChange={this.onChange}>
                                    <option value="null">{t("common:languageSelector")}</option>
                                    <option value="en">{t("common:en")}</option>
                                    <option value="de">{t("common:de")}</option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        {this.state.hasPlusOne &&
                            <><div className="row gtr-uniform">
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
                                            <input type="text" name="firstname" id="firstname-plusone" placeholder={t("common:firstName")} value={this.state.plusOne.firstname} onChange={this.onChangePlusOne} />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="lastname" id="firstname-plusone" placeholder={t("common:lastName")} value={this.state.plusOne.lastname} onChange={this.onChangePlusOne} />
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
                        }
                        {this.state.hasChildren &&
                            <><div className="row gtr-uniform">
                                <div className="col-6 col-12-small">
                                    <input type="radio" id="bringsChild-true" name="bringsChildren" value="yes" checked={this.state.bringsChildren === "yes"} onChange={this.onChange} />
                                    <label htmlFor="bringsChild-true">{t("rsvp:withChildren")}</label>
                                </div>
                                <div className="col-6 col-12-small">
                                    <input type="radio" id="bringsChild-false" name="bringsChildren" value="no" checked={this.state.bringsChildren === "no"} onChange={this.onChange} />
                                    <label htmlFor="bringsChild-false">{t("rsvp:withoutChildren")}</label>
                                </div>

                                {this.state.bringsChildren === "yes" &&
                                    <div className="row gtr-uniform">
                                        {this.state.children.map((data, idx) => (
                                            <div className="col-6 col-12-small">
                                                <div className="col-6 col-12-xsmall">
                                                    <input type="text" name="firstname" id="firstname" placeholder={t("common:firstName")} value={data.firstname} onChange={(e) => this.onChangeChild(e, idx)} />
                                                </div><div className="col-6 col-12-xsmall">
                                                    <input type="text" name="lastname" id="lastname" placeholder={t("common:lastName")} value={data.lastname} onChange={(e) => this.onChangeChild(e, idx)} />
                                                </div><div className="col-6 col-12-xsmall">
                                                    <input type="text" name="age" id="age" placeholder="Age" value={data.age} onChange={(e) => this.onChangeChild(e, idx)} />
                                                </div></div>
                                        ))}
                                    </div>
                                }
                            </div>
                                <hr />
                            </>

                        }
                        <div className="col-12">
                            <textarea name="message" id="demo-message" placeholder={t("common:additionalNotes")} value={this.state.message} rows="3" onChange={this.onChange}></textarea>
                        </div>
                        <br />
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value={t("common:sendMessage")} className="primary" /></li>
                                <li><input type="reset" value={t("common:reset")} /></li>
                            </ul>
                        </div>
                    </form>
                }
                {this.state.submitted && this.state.updated &&
                    <RsvpSubmission />
                }
            </div>);
    }
}


export default withTranslation()(RsvpRequest);