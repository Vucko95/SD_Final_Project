import React from "react"
// import '../App.css';
import './listproperty.css';

export default function Listproperty (props) {


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">List your property</h3>
          <div className="form-group mt-3">
            <label>Property Location</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Property location"
              />
          </div>
          <div className="form-group mt-3">
            <label>Property address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Property address"
              />
          </div>
          <div className="form-group mt-3">
            <label>Property Type</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Property Type"
            />
          </div>
          <div className="form-group mt-3">
            <label>Date</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Date "
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
  )
}