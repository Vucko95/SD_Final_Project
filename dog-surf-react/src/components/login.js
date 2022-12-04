import React from "react"
import '../App.css';
import './login.scss';
 





 const Login = ({ isShowLogin }) => {

//   let loginData = {
//     'username': 'user1',
//     'password': 'pass1'
// }
function login(loginData)
// function loginClick() 
{

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
      // .then(res => console.log(res));
      .then ( res => {

        localStorage.setItem('access_token', JSON.stringify(res.accessToken));
})
}


function handleSubmit(event) {
  // Prevent default behavior
  event.preventDefault();
  let loginData = {
    username: event.target.username.value,
    password: event.target.password.value
  };
  console.log("Login data JSON: " + JSON.stringify(loginData));
  login(loginData);
}

  return (
    <div className="Auth-form-container_login">
          <div className={`${isShowLogin ? "active" : ""}show`}>
      <div className="Auth-form_login">
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