import React, {Component} from 'react';

class DocVerificationForm extends Component {
    render() {
        return (
            <div>
                <form className="mainForm">
                    <div className="row" style={{backgroundColor : "rgb(198,217,247) ", border : "1px solid"}}>

                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-2 col-form-label">Name</label>
                                <div className="col-10">
                                    <input type="text" className="form-control is-valid" value={"name"} disabled={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i1"
                                       value="v1"/>
                                <label className="form-check-label" htmlFor="i1">Ok</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i2"
                                       value="o2"/>
                                <label className="form-check-label" htmlFor="i2">Reject</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i3"
                                       value="o3"/>
                                <label className="form-check-label" htmlFor="i3">Need more info</label>
                            </div>
                        </div>



                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-2 col-form-label">DOB</label>
                                <div className="col-10">
                                    <input type="date" className="form-control" value={"akjds"} disabled={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
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


                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-2 col-form-label">Address</label>
                                <div className="col-10">
                                    <input type="text" className="form-control" value={"address"} disabled={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n3" id="i1"
                                       value="o1"/>
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


                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-2 col-form-label">Education</label>
                                <div className="col-10">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                               value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineRadio1">MBBA</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                               value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">MS</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                               value="option3"/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">MD</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
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

                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-2 col-form-label">Experience</label>
                                <div className="col-10">
                                    <input type="text" className="form-control" value={"experience"} disabled={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i1"
                                       value="v1"/>
                                <label className="form-check-label" htmlFor="i1">Ok</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i2"
                                       value="o2"/>
                                <label className="form-check-label" htmlFor="i2">Reject</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i3"
                                       value="o3"/>
                                <label className="form-check-label" htmlFor="i3">Need more info</label>
                            </div>
                        </div>

                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-2 col-form-label">Medical Registration</label>
                                <div className="col-10">
                                    <input type="text" className="form-control" value={"medicalRegistration"} disabled={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i1"
                                       value="v1"/>
                                <label className="form-check-label" htmlFor="i1">Ok</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i2"
                                       value="o2"/>
                                <label className="form-check-label" htmlFor="i2">Reject</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i3"
                                       value="o3"/>
                                <label className="form-check-label" htmlFor="i3">Need more info</label>
                            </div>
                        </div>

                        <div className="col-sm-8">
                            <div className="form-group row">
                                <label htmlFor="name" className="col-2 col-form-label">Medical Council</label>
                                <div className="col-10">
                                    <input type="text" className="form-control" value={"medicalCouncil"} disabled={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i1"
                                       value="v1"/>
                                <label className="form-check-label" htmlFor="i1">Ok</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i2"
                                       value="o2"/>
                                <label className="form-check-label" htmlFor="i2">Reject</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="n1" id="i3"
                                       value="o3"/>
                                <label className="form-check-label" htmlFor="i3">Need more info</label>
                            </div>
                        </div>
                    </div>


                    <div className={"row"} style={{backgroundColor : "red" , padding:"10px"}}>
                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-4 col-form-label">Document Verified</label>
                                <div className="col-18">
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
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" value="Search"/>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default DocVerificationForm;