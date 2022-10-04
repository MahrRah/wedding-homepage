import React, { Component } from 'react'
import '../../assets/css/main.css'
import { withTranslation } from 'react-i18next';
import RsvpSubmission from './RsvpSubmission';
import { t } from 'i18next';
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import {Oval} from 'react-loader-spinner';
class RsvpRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvpCode: { value: "", error: false },
            error: false,
            submitted: false,
            updated: false,
            firstname: "",
            lastname: "",
            email: { value: "", error: false },
            phone: { value: "", error: false },
            attending: "",
            booking: "",
            hotel: { rooms: { value: 0, error: false }, guests: 0, nights: { value: 0, error: false }, booking: "" },
            food: "0",
            language: "",
            plusOne: { firstname: "", lastname: "", food: "0", attending: "" },
            hasPlusOne: false,
            bringsPlusOne: "",
            children: [],
            hasChildren: false,
            bringsChildren: "",
            message: "",
            data: {}
        };
        // localStorage.setItem('submitted', false);
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
        this.hasError = this.hasError.bind(this);
    }
    LoadingIndicator = (props) => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress &&
            <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        );
    }

    Input = ({ data, lable, onChange }) => {
        return (
            <div className="col-6 col-12-xsmall">
                <input type="text" name={data.name} id={data.name} value={data.value} onChange={onChange} />
                <label className="input-label">{lable}</label>
            </div>
        )
    }
    InputWithError = ({ data, lables, onChange }) => {
        return (
            <div className={data.name === "rsvpCode" ? "field" : "col-6 col-12-xsmall"}>
                <input type="text" name={data.name} id={data.name} value={data.state.value} onChange={onChange} style={{ borderColor: data.state.error ? '#8a0204' : '#eeeeee' }} />
                <label className="input-label">{lables.name}</label>
                {data.state.error && <label className="input-label"> <p style={{ color: "#8a0204" }}>{lables.error}</p></label>}
            </div>)
    }

    FoodChoices = ({ value, onChange }) => {
        return (
            <div className="col-12">
                <select name="food" id="food" value={value} onChange={onChange}>
                    <option value="0">{t("rsvp:mealOptions")}</option>
                    <option value="1">{t("rsvp:noRestictions")}</option>
                    <option value="2">{t("rsvp:vegetarian")}</option>
                    <option value="3">{t("rsvp:glutenfree")}</option>
                </select>
            </div>
        )
    }

    RadioButtons = ({ data, value, lable, onChange }) => {
        return (
            <>
                <div className="col-4 col-12-small">
                    <input type="radio" id={data.name + value[0]} name={data.name} value={value[0]} checked={data.value == value[0]} onChange={onChange} />
                    <label htmlFor={data.name + value[0]}>{lable[0]}</label>
                </div>
                <div className="col-4 col-12-small">
                    <input type="radio" id={data.name + value[1]} name={data.name} value={value[1]} checked={data.value == value[1]} onChange={onChange} />
                    <label htmlFor={data.name + value[1]}>{lable[1]}</label>
                </div>
            </>
        )
    }

    hasError = () => {

        const personalError = this.state.email.error || this.state.phone.error
        const hotelError = (this.state.booking === "yes") ? (this.state.hotel.rooms.error || this.state.hotel.nights.error) : false

        let childError = false
        this.state.children.forEach((x) => {
            childError ||= x.age.error
        })
        const childAgeError = (this.state.bringsChildren === "yes") ? childError : false
        this.setState({ ["error"]: personalError || hotelError || childAgeError })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, (() => this.hasError()));
    }

    onChangeValidate = (e) => {

        let error = false
        switch (e.target.name) {
            case "phone":
                const regexPhone = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
                error = !regexPhone.test(e.target.value.replace(/\s/g, ''))
                break;
            case "email":
                const regexEmail = new RegExp("^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^-]+(?:\\.[a-zA-Z0-9_!#$%&’*+/=?`{|}~^-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");
                error = !regexEmail.test(e.target.value.replace(/\s/g, ''))
                break;
        }
        this.setState({ [e.target.name]: { value: e.target.value, error: error } }, () => {
            this.hasError()
        });

    }

    onChangePlusOne = (e) => {
        let state = this.state.plusOne
        state[e.target.name] = e.target.value
        this.setState({ plusOne: state });
    }

    onChangeHotel = (e) => {
        let state = this.state.hotel
        let error = false
        if (e.target.name == "nights" || e.target.name == "rooms") {

            error = (e.target.value > 0) ? false : true;
            state[e.target.name] = { "value": e.target.value, error: error }
            this.setState({ hotel: state }, () => {
                this.hasError()
            });
        }
        else {
            state[e.target.name] = e.target.value
            this.setState({ hotel: state }, () => {
                this.hasError()
            });
        }
        this.hasError()
    }

    onChangeChild = (e, idx) => {
        let children = this.state.children
        let child = children[idx];
        if (e.target.name == "age") {
            let error = (((e.target.value > 0) && (e.target.value < 18)) || Number.isInteger(e.target.value)) ? false : true;
            child[e.target.name] = { "age": e.target.value, error: error }
        }
        else {
            child[e.target.name] = e.target.value;
        }
        children[idx] = child;
        this.setState({ children: children }, () => {
            this.hasError()
        });
    }

    isSubmitted = () => {
        this.setState({ submitted: true })
    }

    isUpdated = () => {
        this.setState({ updated: true })
    }

    loadRsvpDataToState = (data) => {
        if (data) {
            this.setState({
                rsvpCode: { error: false, value: data.rsvpCode },
                lastname: data.lastname,
                firstname: data.firstname,
                email: { error: false, value: data.email },
                phone: { error: false, value: data.phone },
                attending: data.attending,
                language: data.language,
                food: data.food,
                hotel: { ...this.state.hotel, nights: { error: false, value: data.hotel.nights }, rooms: { error: false, value: data.hotel.rooms } },
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
                let children = []
                data.child.forEach((x) => {
                    let child = {
                        "firstname": x.firstname,
                        "lastname": x.lastname,
                        "food": x.food,
                        "age": { "value": x.age, "error": false },
                        "attending": x.attending
                    }
                    children.push(child)
                })

                this.setState({
                    hasChildren: true,
                    bringsChildren: (data.child[0].attending === "") ? "yes" : data.child[0].attending,
                    children: children
                })
            }

            return true
        }
        else {

            this.setState({ rsvpCode: { value: "", error: true } });

            return false
        }
    }

    resetData = () => {
        this.loadRsvpDataToState(this.state.data);
    }

    handleSubmitCode = async (e) => {
        e.preventDefault();
        try {

            const res = await trackPromise(fetch(` http://localhost:7071/api/rsvp/${this.state.rsvpCode.value}`, {
                method: "GET",
            }))

            if (res.status === 200) {
                let body = await res.json();
                const isLoaded = this.loadRsvpDataToState(body);
                if (isLoaded) {
                    this.isSubmitted()
                }
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
                "hotel": {
                    "rooms": "",
                    "nights": "",
                    "guests": "",
                    "booking": this.state.hotel.booking
                },
                "language": this.state.language,
                "message": this.state.message,
            }

            updateBody.hotel.booking = this.state.booking;
            if (this.state.booking === "yes") {
                updateBody.hotel.rooms = this.state.hotel.rooms.value
                updateBody.hotel.nights = this.state.hotel.nights.value
                updateBody.hotel.guests = this.state.hotel.guests
            }

            if (this.state.hasPlusOne && this.state.bringsPlusOne) {
                let plusOneBody = {
                    "firstname": this.state.plusOne.firstname,
                    "lastname": this.state.plusOne.lastname,
                    "food": this.state.plusOne.food,
                    "attending": this.state.bringsPlusOne
                }
                updateBody.plusOne.push(plusOneBody)
            }

            if (this.state.hasChildren && this.state.bringsChildren) {
                this.state.children.forEach((x) => {
                    let child = {
                        "firstname": x.firstname,
                        "lastname": x.lastname,
                        "age": x.age.value,
                        "attending": this.state.bringsChildren
                    }
                    updateBody.child.push(child)
                });

            }
            console.log(this.state.rsvpCode)

            const res = await fetch(` /api/rsvp/${this.state.rsvpCode.value}`, {

                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateBody)
            });
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
                            <this.InputWithError data={{ "name": "rsvpCode", "type": "text", state: this.state.rsvpCode }}
                                lables={{ "error": t("rsvp:rsvpError"), "name": t("rsvp:rsvpCode") }}
                                onChange={this.onChangeValidate} />

                        </div>
                        <ul className="actions">
                            <li><input type="submit" value={t('rsvp:submitCode')} /></li>
                        </ul>
                        <this.LoadingIndicator />
                    </form>}
                {this.state.submitted && !this.state.updated &&
                    <form method="post" onSubmit={this.updateRsvp}>
                        <h3>{t("rsvp:personal")}</h3>
                        <div className="row gtr-uniform">
                            <this.RadioButtons data={{ value: this.state.attending, name: "attending" }}
                                value={["yes", "no"]}
                                lable={[t("rsvp:attending"), t("rsvp:notAttending")]}
                                onChange={this.onChange} />
                            {this.state.attending == "yes" &&
                                <>
                                    <div className="col-6 col-12-xsmall">
                                        <input readOnly type="text" name="firstname" id="firstname" value={this.state.firstname} />
                                        <label className="input-label">{t("common:firstName")}</label>
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input readOnly type="text" name="lastname" id="lastname" value={this.state.lastname} />
                                        <label className="input-label">{t("common:lastName")}</label>
                                    </div>
                                    <this.InputWithError data={{ "name": "email", "type": "email", state: this.state.email }}
                                        lables={{ "error": t("common:emailError"), "name": t("common:email") }}
                                        onChange={this.onChangeValidate} />
                                    <this.InputWithError data={{ "name": "phone", "type": "text", state: this.state.phone }}
                                        lables={{ "error": t("common:phoneError"), "name": t("common:phone") }}
                                        onChange={this.onChangeValidate} />
                                    <this.FoodChoices value={this.state.food} onChange={this.onChange} />
                                </>
                            }
                        </div>
                        {this.state.attending == "yes" &&
                            <>
                                <hr />
                                <h3>{t("rsvp:hotel")}</h3>
                                <p><i>Would you want us to block you a room?!</i></p>
                                <div className="row gtr-uniform">
                                    <this.RadioButtons data={{ value: this.state.booking, name: "booking" }}
                                        value={["yes", "no"]}
                                        lable={[t("rsvp:withHotel"), t("rsvp:withoutHotel")]}
                                        onChange={this.onChange} />
                                    {this.state.booking == "yes" &&
                                        <>
                                            <this.InputWithError data={{ "name": "rooms", "type": "number", state: this.state.hotel.rooms }}
                                                lables={{ "error": t("rsvp:roomsError"), "name": t("rsvp:rooms") }}
                                                onChange={this.onChangeHotel} />
                                            <this.InputWithError data={{ "name": "nights", "type": "number", state: this.state.hotel.nights }}
                                                lables={{ "error": t("rsvp:nightsError"), "name": t("rsvp:nights") }}
                                                onChange={this.onChangeHotel} />
                                        </>
                                    }
                                </div>
                                <hr />
                                <h3>{t("rsvp:language")}</h3>
                                <p><i>The ceremony will be held in German (not Swiss-German). Do you need translation?</i></p>
                                <div className="row gtr-uniform">
                                    <this.RadioButtons data={{ value: this.state.language, name: "language" }}
                                        value={["de", "en"]}
                                        lable={[t("common:no"), t("common:yes")]}
                                        onChange={this.onChange} />
                                </div>
                                <hr />
                                {this.state.hasPlusOne &&
                                    <>
                                        <h3>{t("rsvp:plusOne")}</h3>
                                        <div className="row gtr-uniform">
                                            <this.RadioButtons data={{ value: this.state.bringsPlusOne, name: "bringsPlusOne" }}
                                                value={["yes", "no"]}
                                                lable={[t("rsvp:withPlusOne"), t("rsvp:withoutPlusOne")]}
                                                onChange={this.onChange} />
                                            {this.state.bringsPlusOne === "yes" &&
                                                <>
                                                    <this.Input data={{ name: "firstname", value: this.state.plusOne.firstname }}
                                                        lable={t("common:firstName")}
                                                        onChange={this.onChangePlusOne} />
                                                    <this.Input data={{ name: "lastname", value: this.state.plusOne.lastname }}
                                                        lable={t("common:lastName")}
                                                        onChange={this.onChangePlusOne} />
                                                    <this.FoodChoices value={this.state.plusOne.food} onChange={this.onChangePlusOne} />

                                                </>}
                                        </div>
                                        <hr />
                                    </>
                                }
                                {this.state.hasChildren &&
                                    <>
                                        <h3>{t("rsvp:children")}</h3>
                                        <div className="row gtr-uniform">
                                            <this.RadioButtons data={{ value: this.state.bringsChildren, name: "bringsChildren" }}
                                                value={["yes", "no"]}
                                                lable={[t("rsvp:withChildren"), t("rsvp:withoutChildren")]}
                                                onChange={this.onChange} />
                                            {this.state.bringsChildren === "yes" &&
                                                <div className="row gtr-uniform">
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

                                                            <this.InputWithError data={{ "name": "age", "type": "number", state: data.age }}
                                                                lables={{ "error": t("common:ageError"), "name": t("common:age") }}
                                                                onChange={(e) => this.onChangeChild(e, idx)} />
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        </div>
                                    </>
                                }
                            </>
                        }
                        <hr />
                        <div className="col-12">
                            <label className="input-label"> {t("common:message")}</label>
                            <textarea name="message" id="demo-message" placeholder={t("common:additionalNotes")} value={this.state.message} rows="3" onChange={this.onChange}></textarea>
                        </div>
                        <br />
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value={t("common:sendMessage")} className="primary" disabled={this.state.error} /></li>
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
