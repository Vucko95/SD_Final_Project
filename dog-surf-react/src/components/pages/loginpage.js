// import react,{useState} from 'react';
import {loginfunc} from '../api/loginapi';

const LoginPage = () => {


    function handleSubmit(event) {
    
      event.preventDefault();
      let loginData = {
        username: event.target.username.value,
        password: event.target.password.value
      };
      console.log("Login POST  " + JSON.stringify(loginData));
    //   POST REQ.
      loginfunc(loginData);
    }
    
      return (
        <div className="Auth-form-container">
    
          <div className="Auth-form">
            <div className="form-box solid">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                    id="username" 
                    name="username"
                    type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  id="password" 
                  name="password"
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit"  className="btn  btn-primary">
                  Submitt
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
   
      )
    }

export default LoginPage;