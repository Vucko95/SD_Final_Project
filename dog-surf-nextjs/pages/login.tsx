import styles from '../styles/Forms.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router';
// import {cookies} from 'next-headers'
// import { setCookie } from './coookies'
import Cookies  from "js-cookie";
// import cookie from "@types/js-cookie";
// import { setCookie } from 'next-cookies';
import cookie from "cookie";
// import console from 'console';
const login = () => { 
    // setUsernameCookie(res, 'John')
    // const { username } = req.query
    const router = useRouter();
    // const router2 = useRouter();
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://localhost:8090/api/auth/login'
        const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSONdata,
        }


    const response = await fetch(endpoint, options)
    const result = await response.json()
    console.log(result)
    console.log(result.user)
    console.log(result.user.username)
    const username = result.user.username
    const user_id = result.user.id
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('user_id', user_id);
    // router.replace('/login', '/home', { shallow: true });
    router.reload()
    router.push('/home');
    // const JSONdata2 = JSON.stringify({"username" : username})
    // const endpoint2 = '/api/coookies'
    // const options2 = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', },
    //     body: JSONdata,
    //     }
    //     const response2 = await fetch(endpoint2, options2)
    //     const result2 = await response2.json()
    //     console.log(result2)
 
}

    const [count, setCount] = useState(0)
    console.log(count)


  
return (
<div  className={styles.logincontent}>
    <div className={styles.wrapper}>
   
           <h1>Login Form</h1>
           <button onClick={() => setCount(count+1)}></button>
           <form onSubmit={handleSubmit}>

           <input className={styles.form_inputs} id='username'  type="text" placeholder='Username' />
           <input className={styles.form_inputs} id='password'  type="text" placeholder='Password' />
          <button type="submit" className={styles.form_button} >Login</button>
           </form>
    
    </div>


</div>
    )}

export default login