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
            // rsvpCode: {value:"",error:false},
            submitted: false,
            updated: false,
            firstname: "",
            lastname: "",
            email: { value: "", error: false },
            phone: { value: "", error: false },
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
            message: "",
            data: {}
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
        this.resetData = this.resetData.bind(this);
        this.onChangeValidate = this.onChangeValidate.bind(this);
    }
    InputWithError = ({ data, lables, onChange }) => {
        return (<div className="col-6 col-12-xsmall">
            <input type="text" name={data.name} id={data.name} value={data.state.value} onChange={onChange} style={{ "border-color": data.state.error ? '#8a0204' : '#eeeeee' }} />
            <label className="input-label">{lables.name}</label>
            {data.state.error && <label className="input-label"> <p style={{ color: "#8a0204" }}>{lables.error}</p></label>}
        </div>)
    }
    onChange = (e) => {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
    }
    onChangeValidate = (e) => {
        console.log(e)
        let error = false
        switch (e.target.name) {

            case "phone":
                const regex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
                error = !regex.test(e.target.value.replace(/\s/g, ''))
                console.log("erro phone files" + error)
            // '(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?: [\x01 -\x08\x0b\x0c\x0e -\x1f\x21\x23 -\x5b\x5d -\x7f] |\\[\x01 -\x09\x0b\x0c\x0e -\x7f]) * ")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'

        }
        this.setState({ [e.target.name]: { value: e.target.value, error: error } });  // Getting access to entered values
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
        //  {...rsvpCode, value:data.rsvpCode}
        this.setState({
            rsvpCode: data.rsvpCode,
            lastname: data.lastname,
            firstname: data.firstname,
            email: { ...email, value: data.email },
            phone: data.phone,
            attending: data.attending,
            language: data.language,
            food: data.food,
            hotel: data.hotel,
            booking: data.hotel.booking,
            message: data.message, data: data
        })

        if (data.plusOne.length > 0) {

            this.setState({
                hasPlusOne: true,
                bringsPlusOne: (data.plusOne[0].attending === "") ? "yes" : data.plusOne[0].attending,
                plusOne: structuredClone(data.plusOne[0])
            });
        }
        if (data.child.length > 0) {
            this.setState({
                hasChildren: true,
                bringsChildren: (data.child[0].attending === "") ? "yes" : data.child[0].attending,
                children: structuredClone(data.child)
            })
        }
    }
    resetData = () => {
        console.log(this.state.data)
        this.loadRsvpDataToState(this.state.data);
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
                "email": this.state.email.value,
                "phone": this.state.phone.value,
                "plusOne": [
                ],
                "child": [],
                "hotel": this.state.hotel,
                "language": this.state.language,
                "message": this.state.message,
            }

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
                console.log()
                this.state.children.forEach((x) => {
                    let child = {
                        "firstname": x.firstname,
                        "lastname": x.lastname,
                        "age": x.age,
                        "attending": this.state.bringsChildren
                    }
                    updateBody.child.push(child)
                });

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
                {true &&
                    // {this.state.submitted && !this.state.updated &&
                    <form method="post" onSubmit={this.updateRsvp}>
                        <h3>{t("rsvp:personal")}</h3>
                        <div className="row gtr-uniform">
                            <div className="col-4 col-12-small">
                                <input type="radio" id="attending-true" name="attending" value="yes" checked={this.state.attending == "yes"} onChange={this.onChange} />
                                <label htmlFor="attending-true">{t("rsvp:attending")}</label>
                            </div>
                            <div className="col-4 col-12-small">
                                <input type="radio" id="attending-false" name="attending" value="no" checked={this.state.attending == "no"} onChange={this.onChange} />
                                <label htmlFor="attending-false">{t("rsvp:notAttending")}</label>
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input readOnly type="text" name="firstname" id="firstname" value={this.state.firstname} />
                                <label className="input-label">{t("common:firstName")}</label>
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input readOnly type="text" name="lastname" id="lastname" value={this.state.lastname} />
                                <label className="input-label">{t("common:lastName")}</label>
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input type="email" name="email" id="email" value={this.state.email.value} onChange={this.onChangeValidate} />
                                <label className="input-label">{t("common:email")}</label>
                            </div>
                            <this.InputWithError data={{ "name": "phone", "type": "text", state: this.state.phone }} lables={{ "error": "error", "name": t("common:phone") }} onChange={this.onChangeValidate} />
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
                        <h3>{t("rsvp:hotel")}</h3>
                        <p><i>Would you want us to block you a room?!</i></p>
                        <div className="row gtr-uniform">
                            <div className="col-4 col-12-small">
                                <input type="radio" id="booking-true" name="booking" value="yes" checked={this.state.booking == "yes"} onChange={this.onChange} />
                                <label htmlFor="booking-true">{t("rsvp:withHotel")}</label>
                            </div>
                            <div className="col-4 col-12-small">
                                <input type="radio" id="booking-false" name="booking" value="no" checked={this.state.booking == "no"} onChange={this.onChange} />
                                <label htmlFor="booking-false">{t("rsvp:withoutHotel")}</label>
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input type="number" name="rooms" id="hotel-rooms" value={this.state.hotel.rooms} onChange={this.onChangeHotel} />
                                <label className="input-label">{t("rsvp:rooms")}</label>
                            </div>
                            {/* <div className="col-6 col-12-xsmall">
                                <input type="number" name="guests" id="hotel-guests" value={this.state.hotel.guests} onChange={this.onChangeHotel} />
                                <label className="input-label">Number of guests to block for</label>
                            </div> */}
                            <div className="col-6 col-12-xsmall">
                                <input type="number" name="nights" id="hotel-nights" value={this.state.hotel.nights} onChange={this.onChangeHotel} />
                                <label className="input-label">{t("rsvp:nights")}</label>
                                <label className="input-label"> <p style={{ color: "#8a0204" }}>error</p></label>
                            </div>
                        </div>
                        <hr />
                        <h3>{t("rsvp:language")}</h3>
                        <p><i>The ceremony will be held in German (not Swiss-German). Do you need translation?</i></p>
                        <div className="row gtr-uniform">
                            <div className="col-4 col-12-small">
                                <input type="radio" id="language-true" name="language" value="de" checked={this.state.language == "de"} onChange={this.onChange} />
                                <label htmlFor="language-true">{t("common:no")}</label>
                            </div>
                            <div className="col-4 col-12-small">
                                <input type="radio" id="language-false" name="language" value="en" checked={this.state.language == "en"} onChange={this.onChange} />
                                <label htmlFor="language-false">{t("common:yes")}</label>
                            </div>
                        </div>
                        <hr />
                        {this.state.hasPlusOne &&
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
                        }
                        {this.state.hasChildren &&
                            <>
                                <h3>{t("rsvp:children")}</h3>
                                <div className="row gtr-uniform">
                                    <div className="col-6 col-12-small">
                                        <input type="radio" id="bringsChild-true" name="bringsChildren" value="yes" checked={this.state.bringsChildren === "yes"} onChange={this.onChange} />
                                        <label htmlFor="bringsChild-true">{t("rsvp:withChildren")}</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="radio" id="bringsChild-false" name="bringsChildren" value="no" checked={this.state.bringsChildren === "no"} onChange={this.onChange} />
                                        <label htmlFor="bringsChild-false">{t("rsvp:withoutChildren")}</label>
                                    </div>

                                    {this.state.bringsChildren === "yes" &&
                                        <>
                                            {this.state.children.map((data, idx) => (
                                                <div key={idx}>
                                                    <div className="col-6 col-12-small">
                                                        <input type="text" name="firstname" id="firstname" value={data.firstname} onChange={(e) => this.onChangeChild(e, idx)} />
                                                        <label className="input-label">{t("common:firstName")}</label>
                                                    </div>
                                                    <div className="col-6 col-12-small">
                                                        <input type="text" name="lastname" id="lastname" value={data.lastname} onChange={(e) => this.onChangeChild(e, idx)} />
                                                        <label className="input-label">{t("common:lastName")}</label>
                                                    </div>
                                                    <div className="col-6 col-12-small">
                                                        <input type="text" name="age" id="age" value={data.age} onChange={(e) => this.onChangeChild(e, idx)} />
                                                        <label className="input-label">{t("common:age")}</label>
                                                    </div></div>
                                            ))}
                                        </>
                                    }
                                </div>
                                <hr />
                            </>

                        }
                        <div className="col-12">
                            <label className="input-label"> {t("common:message")}</label>
                            <textarea name="message" id="demo-message" placeholder={t("common:additionalNotes")} value={this.state.message} rows="3" onChange={this.onChange}></textarea>
                        </div>
                        <br />
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value={t("common:sendMessage")} className="primary" /></li>
                                <li><input type="reset" value={t("common:reset")} onClick={this.resetData} /></li>
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