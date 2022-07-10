import React, { useEffect, useState, Component } from 'react'
import '../assets/css/main.css'
// import { useTranslation } from "react-i18next";
import { withTranslation } from 'react-i18next';
// import RsvpSubmit from "./RsvpSubmit.js"

class RsvpRequest extends Component {
    constructor(props, t) {
        super(props);
        this.state = {
            name: '',
            age: null,
            submitted: false,
            t: t,
            rsvpCode: ""
        };
        localStorage.setItem('submitted', false);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitCode = this.handleSubmitCode.bind(this);
        this.isSubmitted = this.isSubmitted.bind(this);
    }

    handleSubmitCode = async (e) => {
        e.preventDefault();
        this.state.submitted = true;
        localStorage.setItem('submitted', true);
        console.log(this.state)
        try {
            let res = await fetch("https://c09e2585-a193-4e06-9802-9982f474df6d.mock.pstmn.io/rsvps", {
                method: "POST",
                body: JSON.stringify({
                    rsvpCode: this.state.rsvpCode,
                }),
            });
            
            if (res.status === 200) {
                this.state.rsvpCode = "";

            } else {
            }
        } catch (err) {
            console.log(err);
        }
    };
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
    }
    isSubmitted =  ()=> {
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
                        <li><input type="submit" value={this.props.t('send')} onClick={this.isSubmitted}/></li>
                    </ul>
                </form>}
            </div><div>
                {this.state.submitted && 
                    <form method="post" action="#">
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <input type="text" name="demo-name" id="demo-name" placeholder="First Name" />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input type="email" name="demo-email" id="demo-email" placeholder="Last Name" />
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
                            {/* <h5>Plus One</h5>
                            <div className="col-4 col-12-small">
                                <input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked={true} />
                                <label for="demo-priority-low">Yes</label>
                            </div>
                            <div className="col-4 col-12-small">
                                <input type="radio" id="demo-priority-normal" name="demo-priority"  />
                                <label for="demo-priority-normal">No</label>
                            </div> */}
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