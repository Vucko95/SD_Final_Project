// import { useHistory } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {authenticationService} from "../service/auth-service";
import {history} from "../pages/loginpage"
export function loginfunc(loginData)

{
    
   
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
            if (res.accessToken) {
                // localStorage.setItem('access_token', JSON.stringify(res.accessToken));
                authenticationService.login(res.user, res.access_token);
             
                alert("Login Sucess");    
                // history.push("/");    
                // this.props.history.push('/');
            } else {
                alert("Login Failure")
                authenticationService.logout();
            }
            
                    })





}