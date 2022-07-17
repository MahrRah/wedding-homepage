import React, { Component } from 'react'
import '../assets/css/main.css'
import { withTranslation } from 'react-i18next';

class RsvpRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvpCode: "",
            submitted: false,
            firstname: '',
            lastname: '',
            dinner: '',
            allowedBrunch: false,
            brunch: false,
            plusOne: null,
            hasPlusOne: false,
            children: null,
            hasChildren: false,
            message: ""
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
                this.changeStateAPI(body);
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
                this.isSubmitted();
                console.log(body);
            } else {
            }
        } catch (err) {
            console.log(err);
        }
    };
    changeStateAPI(data) {
        this.setState({ lastname: data.lastname, firstname: data.name, brunch: data.brunch, allowedBrunch: data.allowedBrunch, dinner: data.dinner })
        if (!data.plusOne.length) {
            this.setState({ hasPlusOne: true, plusOne: data.plusOne })
        }
        if (!data.children.length) {
            this.setState({ hasChildren: true, plusOne: data.children })
        }
        console.log(this.state);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
    }
    isSubmitted = () => {
        this.setState({ submitted: true })
    }
    render() {
        return (
            <><div id="main">
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
                                    <input type="text" name="firstname" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.onChange} />
                                </div>
                                <div className="col-6 col-12-xsmall">
                                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.onChange} />
                                </div>
                                {this.state.allowedBrunch &&
                                    <div>
                                        <h5>Brunch on Sunday</h5>
                                        <div className="col-4 col-12-small" onChange={this.onChange}>
                                            <input type="radio" id="brunch-yes" value={this.state.brunch} name="brunch" />
                                            <label for="brunch-yes">Yes</label>
                                            <input type="radio" id="brunch-no" value={this.state.brunch} name="brunch" />
                                            <label for="brunch-no">No</label>
                                        </div>
                                    </div>}
                                <div className="col-12">
                                    <select name="dinner" id="dinner" value={this.state.dinner} onChange={this.onChange}>
                                        <option value="0">- Meal options -</option>
                                        <option value="1">Vegarian</option>
                                        <option value="2">Vegan</option>
                                        <option value="3">Gluten free</option>
                                        <option value="4">No Dietary restirctions</option>
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
                        </form>}
                </div></>
        );
    }
}

export default withTranslation()(RsvpRequest);