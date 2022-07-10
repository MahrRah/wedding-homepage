import React, { useEffect, useState, Component } from 'react'
import '../assets/css/main.css'
// import { useTranslation } from "react-i18next";
import { withTranslation } from 'react-i18next';
// import RsvpSubmit from "./RsvpSubmit.js"

class RsvpRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            data: null,
            submitted: false,
            rsvpCode: ""
        };
        localStorage.setItem('submitted', false);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitCode = this.handleSubmitCode.bind(this);
        this.isSubmitted = this.isSubmitted.bind(this);
        this.changeStateAPI = this.changeStateAPI.bind(this);
    }

    handleSubmitCode = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:7071/api/rsvp/${this.state.rsvpCode}`, {
                method: "GET",
            });
            if (res.status === 200) {
                let body = await res.json();
                this.isSubmitted()
                console.log(body)
            } else {
            }
        } catch (err) {
            console.log(err);
        }
    };

    handleSubmitChanges = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:7071/api/rsvp/${this.state.rsvpCode}`, {
                method: "POST",
                body: {}
            });
            if (res.status === 200) {
                let body = await res.json();
                this.changeStateAPI(body);
                this.isSubmitted();
                console.log(body);
            } else {
            }
        } catch (err) {
            console.log(err);
        }
    };
    changeStateAPI(data) {
        this.setState({ lastname: data.name })
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
    }
    isSubmitted = () => {
        this.setState({ submitted: true })
    }
    render() {
        return (
            <>
                <div>
                    {!this.state.submitted &&
                        <form method="post" onSubmit={this.handleSubmitCode}>
                            <div className="fields">
                                <div className="field">
                                    <label for="rsvpCode">{this.props.t("common:rsvp-code")}</label>
                                    <input type="text" name="rsvpCode" id="rsvpCode" placeholder={this.state.rsvpCode}
                                        onChange={this.onChange} />
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value={this.props.t('send')} /></li>
                            </ul>
                        </form>}
                </div><div>
                    {this.state.submitted &&
                        <form method="post" action="#">
                            <div className="row gtr-uniform">
                                <div className="col-6 col-12-xsmall">
                                    <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                                </div>
                                <div className="col-6 col-12-xsmall">
                                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname} />
                                </div>
                                <h5>Brunch on Sunday</h5>
                                <div className="col-4 col-12-small">
                                    <input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked={true} />
                                    <label for="demo-priority-low">Yes</label>
                                </div>
                                <div className="col-4 col-12-small">
                                    <input type="radio" id="demo-priority-normal" name="demo-priority" />
                                    <label for="demo-priority-normal">No</label>
                                </div>
                                <div className="col-12">
                                    <select name="Food Options" id="food-options">
                                        <option value="">- Meal options -</option>
                                        <option value="1">Vegarian</option>
                                        <option value="1">Vegan</option>
                                        <option value="1">Gluten free</option>
                                        <option value="1">No Dietary restirctions</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea name="demo-message" id="demo-message" placeholder="Additional Notes" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" className="primary" /></li>
                                        <li><input type="reset" value="Reset" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    }
                </div></>
        );
    }
}

export default withTranslation()(RsvpRequest);