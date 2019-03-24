import React, {Component} from 'react';
import LabelInputOption from "../container/App";
import {Provider} from "react-redux";

class LocVericationForm extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Location Verification</h1>
                    <hr/>
                </div>
                <div style={{ padding: "10px" }} >
                    <div style={{border : "1px solid" , backgroundColor : "rgb(198,217,247)"}}>
                        <LabelInputOption label = "Name"/>
                        <LabelInputOption label = "Address"/>
                        <LabelInputOption label = "City"/>
                        <LabelInputOption label = "State"/>
                        <LabelInputOption label = "PIN"/>
                    </div>
                    <div style={{backgroundColor : "red" , margin : "5px 0 5px 0" , padding : "10px" , border : "1px solid"}}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                   value="option1"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Ok</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                   value="option2"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Reject</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                   value="option3"/>
                            <label className="form-check-label" htmlFor="inlineRadio3">Need more info</label>
                        </div>
                    </div>
                    <div>
                        <label className={'form-label'} htmlFor={"location"}>Get Location Coordinate</label>
                        <input className={'form-control'} style={{width : "300px"}} id={"location"}  name = "latitude"/>
                        <input className={'form-control'} style={{width : "300px"}} id={"location"}  name = "longitude"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocVericationForm;