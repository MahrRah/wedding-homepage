import React, { useEffect, useState } from 'react'
import '../assets/css/main.css'
import { useTranslation } from "react-i18next";

function RsvpSubmit() {

    const [name, setName] = useState("");
    const [rsvpCode, setRsvpCode] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const { t } = useTranslation(["common"]);

    let handleSubmitCode = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://c09e2585-a193-4e06-9802-9982f474df6d.mock.pstmn.io/rsvps", {
                method: "POST",
                body: JSON.stringify({
                    rsvpCode: rsvpCode,
                }),
            });
            if (res.status === 200) {
                setRsvpCode("");
                
              } else {
              }
        } catch (err) {
            console.log(err);
        }
    };


    return (
         <form method="post" action="#">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="demo-name" id="demo-name" value="" placeholder="First Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="demo-email" id="demo-email" value="" placeholder="Last Name" />
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
            <h5>Plus One</h5>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="demo-priority" checked />
              <label for="demo-priority-low">Yes</label>
            </div>
            <div className="col-4 col-12-small">
              <input type="radio" id="demo-priority-normal" name="demo-priority" />
              <label for="demo-priority-normal">No</label>
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

    );
}

export default RsvpSubmit;