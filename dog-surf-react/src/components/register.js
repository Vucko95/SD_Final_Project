import React from "react"
import '../App.css';
import './register.css';
 
const Register = ({ isShowRegister }) => {


  return (
    <div className="Auth-form-container">
       <div className={`${isShowRegister ? "active" : ""} show`}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Firstname</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Firstname"
            />
          </div>
          <div className="form-group mt-3">
            <label>Lastname</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Lastname"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group mt-3">
            <label>City</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter City"
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Address"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/home">password?</a>
          </p>
        </div>
      </form>
      </div>
    </div>
  )
}
export default Register;