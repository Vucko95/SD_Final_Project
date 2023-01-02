import styles from '../styles/Forms.module.css'
import { useEffect, useState, ReactElement } from 'react'
const Register = () => { 
    const [updateMessage, setUpdateMessage] = useState('');
 

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
          username: event.target.username.value,
          password: event.target.password.value,
          firstname: event.target.firstname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          city: event.target.city.value,
          address: event.target.address.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://localhost:8090/api/auth/register'
        const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSONdata,
        }
    const response = await fetch(endpoint, options)
    const result = await response.json()
    console.log(result)
    if (response.status === 200) {
        setUpdateMessage('New User Created');
    } else if (response.status === 400) {
        setUpdateMessage('Invalid Request');
    } else {
        setUpdateMessage('Invalid Request');
    }
    
     
}

   
    return (

<div  className={styles.logincontent}>
    <div className={styles.wrapper}>
        <h1>Register Form</h1>
        <form  onSubmit={handleSubmit}>

           <input className={styles.form_inputs}  id='username' type="text" placeholder='Username' />
           <input className={styles.form_inputs}  id='password' type="password" placeholder='Password' />
           <input className={styles.form_inputs}  id='firstname'  type="text" placeholder='Firstname' />
           <input className={styles.form_inputs}  id='lastname' type="text" placeholder='LastName' />
           <input className={styles.form_inputs}  id='email' type="text" placeholder='Email' />
           <input className={styles.form_inputs}  id='city' type="text" placeholder='City' />
           <input className={styles.form_inputs}  id='address' type="text" placeholder='Address' />
           <button type="submit" className={styles.form_button} >Register</button>
        </form>
        <div ><h1>{updateMessage}</h1></div>
    
    </div>


</div>
    )}

export default Register