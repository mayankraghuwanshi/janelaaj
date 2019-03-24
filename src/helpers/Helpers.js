import React from 'react'
export const Input = ({type="text" , id , placeHolder , verified ,error , name})=>{
    const extraClass = verified ? "is-valid" : "is-invalid"
    return <div style={{display : "flex", clear : "all" , width : "300px"}}><input type={type}
                  className={`form-control ${extraClass}`}
                  id={id}
                  placeholder={placeHolder}
                  name={name}>
           </input>
        {error && <div className="invalid-feedback">
            {error}
        </div>}</div>}

export const Label = ({name , htmlFor})=>{
    return <label htmlFor={htmlFor}
                  className="col-sm-2 col-form-label">{name}</label>
}

export const LabelInputOption = (props)=>{
    return <div style={{display : "inline"}}><div className="col-sm-6">
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-2 col-form-label">Email</label>
                <div className="col-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
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
        </div></div>
}
