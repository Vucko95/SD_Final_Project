import React from "react"
// import '../App.css';
import './editproperty.css';

export default function Editproperty (props) {

  return (
    <div className="Edit_property_box">
<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">ADD / EDIT Property</h3>
          <div className="form-group mt-3">
            <label>Property Location</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Property Location"
              />
          </div>
          <div className="form-group mt-3">
            <label>Property Address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Property Address"
              />
          </div>

          <div className="form-group mt-3">
            <label>DATE</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="DATE"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit"  className="btn btn-primary list-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
      </div>
      </div>
  )
  
}