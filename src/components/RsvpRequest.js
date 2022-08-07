import React, { Component } from 'react'
import '../assets/css/main.css'
import { withTranslation } from 'react-i18next';

class RsvpRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rsvpCode: "",
            submitted: false,
            firstname: "",
            lastname: "",
            attending: "yes",
            dinner: "",
            allowedBrunch: false,
            brunch: false,
            plusOne: { name: "", lastname: "", food: "" },
            hasPlusOne: false,
            bringsPlusOne: "",
            children: undefined,
            hasChildren: false,
            bringsChildren: false,
            message: ""
        };
        localStorage.setItem('submitted', false);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitCode = this.handleSubmitCode.bind(this);
        this.isSubmitted = this.isSubmitted.bind(this);
        this.changeStateAPI = this.changeStateAPI.bind(this);
        this.onChangePlusOne = this.onChangePlusOne.bind(this);
        this.updateRsvp = this.updateRsvp.bind(this);
    }


    handleSubmitCode = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/rsvp/${this.state.rsvpCode}`, {
                method: "GET",
            });
            if (res.status === 200) {
                let body = await res.json();
                this.changeStateAPI(body);
                this.isSubmitted()
                console.log(body)
            } else {
                console.log(res.status)
            }
        } catch (err) {
            console.log(err);
        }
    };

    handleSubmitChanges = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/rsvp/${this.state.rsvpCode}`, {
                method: "POST",
                body: {}
            });
            if (res.status === 200) {
                let body = await res.json();
                this.isSubmitted();
            } else {
                console.log(res.status);
            }
        } catch (err) {
            console.log("Endpoint cant be reached");
        }
    };

    changeStateAPI(data) {
        this.setState({ rsvpCode: data.rsvpCode, lastname: data.lastname, firstname: data.name, brunch: data.brunch, allowedBrunch: data.allowedBrunch, dinner: data.food })

        if (data.plusOne.length > 0) {

            this.setState({ hasPlusOne: true, bringsPlusOne: "yes", plusOne: data.plusOne[0] });
        }
        if (data.child.length > 0) {
            this.setState({ hasChildren: true, bringsChildren: "yes", children: data.child })
        }
        console.log(`state after load ${JSON.stringify(this.state)}`);
    }

    onChange(e) {
        console.log(e)
        console.log(this.state.attending)
        this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
        console.log(this.state.attending)
    }
    onChangePlusOne(e) {
        let state = this.state.plusOne
        state[e.target.name] = e.target.value
        this.setState({ plusOne: state });
    }
    isSubmitted = () => {
        this.setState({ submitted: true })
    }

    updateRsvp = async (e) => {
        e.preventDefault();
        console.log(this.state.rsvpCode);
        try {
            let updateBody = {
                "food": this.state.dinner,
                "plusOne": [
                ],
                "child": []
            }

            if (this.state.hasPlusOne && this.state.bringsPlusOne) {
                let plusOneBody = {
                    "name": this.state.plusOne.name,
                    "lastname": this.state.plusOne.lastname,
                    "food": this.state.plusOne.dinner
                }
                updateBody.plusOne.push(plusOneBody)
            }

            // if (hasChildren && bringsChildren){

            //     // for (let i = 0; i < his.state.children; i++){
            //     //     bodyTmp.plusOne.name = this.state.plusOne.name
            //     //     bodyTmp.plusOne.lastname = this.state.plusOne.lastname
            //     //     bodyTmp.plusOne.food = this.state.plusOne.dinner
            //     // }
            // }

            const res = await fetch(`http://localhost:7071/api/rsvp/${this.state.rsvpCode}`, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    // // "Access-Control-Allow-Credentials": true,
                    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateBody)
            });
            if (res.status === 200) {
                let body = await res.json();
                // this.isSubmitted();
            } else {
                console.log(res.status);
            }
        } catch (err) {
            console.log(`Endpoint cant be reached: ${err}`);
        }
    }

    render() {
        return (
            <div id="main">
                <div>
                    <h2>RSVP</h2>
                    <p>asdsd</p>
                </div>
                {!this.state.submitted &&
                    <form method="post" onSubmit={this.handleSubmitCode}>
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="rsvpCode">{this.props.t("common:rsvp-code")}</label>
                                <input type="text" name="rsvpCode" id="rsvpCode" placeholder={this.state.rsvpCode}
                                    onChange={this.onChange} />
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value={this.props.t('send')} /></li>
                        </ul>
                    </form>}
                {this.state.submitted &&
                    <form method="post" onSubmit={this.updateRsvp}>
                        <div className="col-4 col-12-small">
                            <input type="radio" id="attending-true" name="attending" value="yes" checked={this.state.attending == "yes"} onChange={this.onChange} />
                            <label htmlFor="attending-true">Attending</label>
                        </div>
                        <div className="col-4 col-12-small">
                            <input type="radio" id="attending-false" name="attending" value="no" checked={this.state.attending == "no"} onChange={this.onChange} />
                            <label htmlFor="attending-false">Not attending</label>
                        </div>
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <input readOnly type="text" name="firstname" id="firstname" value={this.state.firstname} />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input readOnly type="text" name="lastname" id="lastname" value={this.state.lastname} />
                            </div>
                            <div className="col-12">
                                <select name="dinner" id="dinner" value={this.state.dinner} onChange={this.onChange}>
                                    <option value="0">- Meal options -</option>
                                    <option value="1">Vegarian</option>
                                    <option value="2">Vegan</option>
                                    <option value="3">Gluten free</option>
                                    <option value="4">No Dietary restirctions</option>
                                </select>
                            </div>
                        </div>
                        <hr />

                        {this.state.hasPlusOne &&

                            <><div className="row gtr-uniform">
                                <div className="col-6 col-12-small">
                                    <input type="radio" id="bringsPlusOne-true" name="bringsPlusOne" value="yes" checked={this.state.bringsPlusOne === "yes"} onChange={this.onChange} />
                                    <label htmlFor="bringsPlusOne-true">with Plus One</label>
                                </div>
                                <div className="col-6 col-12-small">
                                    <input type="radio" id="bringsPlusOne-false" name="bringsPlusOne" value="no" checked={this.state.bringsPlusOne === "no"} onChange={this.onChange} />
                                    <label htmlFor="bringsPlusOne-false">without Plus One</label>
                                </div>
                                {this.state.bringsPlusOne === "yes" &&
                                    <>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="name" id="firstname-plusone" placeholder="First Name" value={this.state.plusOne.name} onChange={this.onChangePlusOne} />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="lastname" id="firstname-plusone" placeholder="Last Name" value={this.state.plusOne.lastname} onChange={this.onChangePlusOne} />
                                        </div>
                                        <div className="col-12">
                                            <select name="dinner" id="food" value={this.state.plusOne.dinner} onChange={this.onChangePlusOne}>
                                                <option value="0">- Meal options -</option>
                                                <option value="1">Vegarian</option>
                                                <option value="2">Vegan</option>
                                                <option value="3">Gluten free</option>
                                                <option value="4">No Dietary restirctions</option>
                                            </select>
                                        </div></>}
                            </div><hr /></>
                        }
                        {this.state.hasChildren &&
                            <><div className="row gtr-uniform">
                                <div className="col-6 col-12-small">
                                    <input type="radio" id="bringsChild-true" name="bringsChildren" value="yes" checked={this.state.bringsChildren === "yes"} onChange={this.onChange} />
                                    <label htmlFor="bringsChild-true">with Children</label>
                                </div>
                                <div className="col-6 col-12-small">
                                    <input type="radio" id="bringsChild-false" name="bringsChildren" value="no" checked={this.state.bringsChildren === "no"} onChange={this.onChange} />
                                    <label htmlFor="bringsChild-false">without Children</label>
                                </div>

                                {this.state.bringsChildren === "yes" &&
                                    <div className="row gtr-uniform">
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="firstname" id="name" placeholder="First Name" value={this.state.children[0].name} onChange={this.onChange} />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={this.state.children[0].lastname} onChange={this.onChange} />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="agechild" id="agechild" placeholder="Age" value={this.state.children[0].age} onChange={this.onChange} />
                                        </div>
                                    </div>}
                            </div><hr /></>


                        }


                        <div className="col-12">
                            <textarea name="demo-message" id="demo-message" placeholder="Additional Notes" rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="primary" /></li>
                                <li><input type="reset" value="Reset" /></li>
                            </ul>
                        </div>
                    </form>
                }
            </div>);


        {/* <div id="main">
          


                                {this.state.hasChildren &&
                                    <>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-low" name="demo-priority" checked />
                                            <label for="demo-priority-low">with Children</label>
                                        </div>
                                        <div className="col-4 col-12-small">
                                            <input type="radio" id="demo-priority-normal" name="demo-priority" />
                                            <label for="demo-priority-normal">without Children</label>
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="firstnamechild" id="firstnamechild" placeholder="First Name Child" value={this.state.children[0].name} onChange={this.onChange} />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="lastnamechild" id="lastnamechild" placeholder="Last Name Child" value={this.state.children[0].lastname} onChange={this.onChange} />
                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="agechild" id="agechild" placeholder="Age" value={this.state.children[0].age} onChange={this.onChange} />
                                        </div>
                                        <div className="col-12">
                                            <select name="dinner" id="dinner" value={this.state.children[0].dinner} onChange={this.onChange}>
                                                <option value="0">- Meal options -</option>
                                                <option value="1">Vegarian</option>
                                                <option value="2">Vegan</option>
                                                <option value="3">Gluten free</option>
                                                <option value="4">No Dietary restirctions</option>
                                            </select>
                                        </div>
                                    </>
                                }

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
                                

                        </form>
                        }
                        </div> */}

    }
}


{/* <div>
    {this.props.level.map((item, index) => (
       <span className='indent' key={index} />
    ))}
    "Some text value"
   </div> */}

export default withTranslation()(RsvpRequest);