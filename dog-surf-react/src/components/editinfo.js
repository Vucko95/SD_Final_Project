import React from "react"
// import '../App.css';
import './editinfo.css';

export default function Editinfo (props) {


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Edit Info</h3>
          <div className="form-group mt-3">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Firstname"
              />
          </div>
          <div className="form-group mt-3">
            <label>Lastname</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Lastname"
              />
          </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="City"
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Address"
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