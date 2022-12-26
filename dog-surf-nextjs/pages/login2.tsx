import styles from '../styles/Forms.module.css'
import { useState } from 'react'
// import {cookies} from 'next-headers'
// import { setCookie } from './coookies'
import Cookies  from "js-cookie";
// import cookie from "@types/js-cookie";
import { setCookie } from 'next-cookies';

const login = () => { 
    interface Props {
        req: any;
        res: any;
      }
    const handleSubmit = (event: Event) => {
        event.preventDefault();
    
        // Make a GET request to the /api/login endpoint
        fetch('/api/login')
          .then(response => response.json())
          .then(data => {
            // Set the cookie using the setCookie function
            setCookie('username', data.username, {}, req, res);
          })
          .catch(error => {
            console.error(error);
          });
      };

  
return (

<form onClick={handleSubmit}>
  <button type="submit">Log In</button>
</form>
    )}

export default login