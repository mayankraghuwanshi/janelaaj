import React from 'react'

const LabelInputOption = ({options, name})=>{
    return <div className={"row"}>
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
    </div>

}
export default RadioInput