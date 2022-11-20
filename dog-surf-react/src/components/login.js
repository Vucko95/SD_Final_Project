import React from "react"
import '../App.css';
import './login.css';
 
 const Login = ({ isShowLogin }) => {


  return (
    <div className="Auth-form-container">
          <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn  btn-primary">
              Submit
            </button>
          </div>
          <label className="forgot-password text-right mt-2">
            Forgot <a href="/home">password?</a>
          </label>
        </div>

      </form>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Login;