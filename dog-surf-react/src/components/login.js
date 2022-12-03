import React from "react"
import '../App.css';
import './login.css';
 
 const Login = ({ isShowLogin }) => {

  let loginData = {
    'username': 'user1',
    'password': 'pass1'
}

function loginClick() {

  // Send data to the backend via POST
  fetch('http://localhost:8090/api/auth/login', {

      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)

  })
      .then(response => response.json())
      .then(res => console.log(res));
}


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
            <button type="button" onClick={loginClick} className="btn  btn-primary">
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