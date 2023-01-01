import styles from '../styles/Forms.module.css'
import styles2 from '../styles/Profile.module.css'

import { useEffect, useState, ReactElement } from 'react'
import cv2 from '../public/images/cv2.png'
const Profile = () => { 
    // const [user, setUser] = useState(null);
    // const user_id = sessionStorage.getItem('user_id');
    // console.log(user_id)
    // const [profileinfo, setProfileinfo] = useState<any[]>([]);
    // const [responseData, setResponseData] = useState(null);
    const [user, setUser] = useState<User | null>(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const [updateMessageProperty, setUpdateMessageProperty] = useState('');
    const [updateUserr, setUpdatUserr] = useState('');

    // const [propertyLocation, setPropertyLocation] = useState('');
    // const [propertyAddress, setPropertyAddress] = useState('');
    const [bookedPropertyLocation, setPropertyLocation] = useState<string | null>(null);
    const [bookedPropertyAddress, setPropertyAddress] = useState<string | null>(null);
    // console.log(user_id)
    const getUser = async () => {
      const user_id = sessionStorage.getItem('user_id');
      if (user_id) {
        // const user_id = sessionStorage.getItem('user_id');
        console.log(user_id)
        // const res = await fetch('http://localhost:8090/api/v1/users/2');
        const res = await fetch('http://localhost:8090/api/v1/users/' + user_id);
        const data = await res.json();
        console.log(data.property)
        // console.log(data.user.username)
        setUser(data as User);
         if (data.property == null) {
          console.log("NO Property")
         }
      }
      else {
        setUpdatUserr('Please Login First to display information');
      }
    }
  
    // useEffect(() => {
    //   getUser();
    // }, []);
    interface User {
        id: number;
        username: string;
        email: string;
        firstname: string;
        lastname: string;
        city: string;
        address: string;
        role: string;
        property: {
          id: number;
          propertyLocation: string;
          propertyAddress: string;
        };
      }



      const updateUser = async () => {
        const user_id = sessionStorage.getItem('user_id');
        if (user) {
          const updatedUser = {
            username: user.username,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            city: user.city,
            address: user.address,
          };
          const res = await fetch(('http://localhost:8090/api/v1/users/' + user_id), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
          });
          const data = await res.json();
          setUser(data as User);
          setUpdateMessage('User updated');
        //   return true
        }
      }

      const updateUserProperty = async () => {
        const user_id = sessionStorage.getItem('user_id');
        if (user) {
        
          const updatedUserProperty = {
            propertyLocation: user.property.propertyLocation,
            propertyAddress: user.property.propertyAddress,
          };
          const res = await fetch('http://localhost:8090/api/v1/users/' + user_id + '/property', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserProperty),
          });
          const data = await res.json();
        //   setUser(data as User);
        setUser({ ...user, property: data });
          console.log(data)
          setUpdateMessageProperty('Property updated');
        //   return true
        }
      }

      // const GettBookedProperty = async () => {
      //   const user_id = sessionStorage.getItem('user_id');
      //   if (user_id) {
      //     // const updatedUserProperty = {
      //     //   propertyLocation: user.property.propertyLocation,
      //     //   propertyAddress: user.property.propertyAddress,
      //     const res = await fetch('http://localhost:8090/api/v1/users/' + user_id )
      //     const data = await res.json();
      //     console.log(data.bookedProperty)
      //     setPropertyLocation(data.bookedProperty.propertyLocation);
      //     setPropertyAddress(data.bookedProperty.propertyAddress);
  
        
      //   };
 
      
  const GettBookedProperty = async () => {
    const user_id = sessionStorage.getItem('user_id');
    const res = await fetch('http://localhost:8090/api/v1/users/' + user_id );
    const data = await res.json();
   if (data.bookedProperty) {
      setPropertyLocation(data.bookedProperty.propertyLocation);
      setPropertyAddress(data.bookedProperty.propertyAddress);
    } else {
      setPropertyLocation('not booked yet');
      setPropertyAddress('not booked yet');
    }
        }
      

    // useEffect(() => {
    //   GettBookedProperty();
    // }, []);


    return (
        
<div  className={styles2.profilecontent}>
    <div className={styles2.title_box}>

    {/* <h1>Profile Information</h1> */}
    </div>

    <div className={styles2.wrapper_parent}>
            <div className={styles2.wrapper_left_pic}>
            
            <img alt="test" src="/images/dog_left2.png"  />
            </div>
            <div className={styles2.wrapper1}>
        
                <h1>Edit Profile</h1>
                   <div ><h3>{updateUserr}</h3></div>
                {/* <button onClick={handleButtonClick}>BUTTON BRO</button> */}


                <div>
    <button className={styles.form_button} onClick={getUser}>Display User Info</button>
    {user && (
            <div>
                {/* <label>ID: {user.id}</label> */}
                <br />
                <input className={styles.form_inputs} value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" placeholder='Username' />
                {/* <label>Username: {user.username}</label> */}
                <form  action="#">
                {/* <input className={styles.form_iuser.emailnputs} value='test' type="text" placeholder='Username' /> */}
                <input className={styles.form_inputs} value={user.firstname} onChange={(e) => setUser({ ...user, firstname: e.target.value })} type="text" placeholder='Firstname' />
                <input className={styles.form_inputs} value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} type="text" placeholder='LastName' />
                <input className={styles.form_inputs} value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" placeholder='Email' />
                <input className={styles.form_inputs} value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} type="text" placeholder='City' />
                <input className={styles.form_inputs} value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} type="text" placeholder='Address' />
                <button onClick={updateUser} className={styles.form_button} >Update Profile</button>
                <div ><h2>{updateMessage}</h2></div>

                </form>
                <h1>Edit Property</h1>
                
                {user.property && (
                    <>
                     <form  action="#">
                    {/* <label>Property ID: {user.property.id}</label> */}
                    <input className={styles.form_inputs} value={user.property.propertyLocation} onChange={(e) => setUser({ ...user, property: { ...user.property, propertyLocation: e.target.value } })} type="text" placeholder='LastName' />
                    <input className={styles.form_inputs} value={user.property.propertyAddress} onChange={(e) => setUser({ ...user, property: { ...user.property, propertyAddress: e.target.value } })} type="text" placeholder='Email' />
                    {/* <label>Property Location: {user.property.propertyLocation}</label>
                    <br />
                <label>Property Address: {user.property.propertyAddress}</label> */}
                    <button onClick={updateUserProperty} className={styles.form_button} >Update Property Info</button>
                      {/* <button className={styles.form_button} >Edit</button> */}
                    <div ><h2>{updateMessageProperty}</h2></div>
                    </form>
                </>
                )}
            </div>
                )}
                </div>

               
            
            </div>
            {/* <div className={styles2.wrapper2}>
        
                <h1>Edit Property</h1>
                <form  action="#">
                <input className={styles.form_inputs} type="text" placeholder='Property Location' />
                <input className={styles.form_inputs} type="text" placeholder='Property Address' />
                </form>
                <button className={styles.form_button} >Profile</button>
            
            </div> */}
            <div className={styles2.wrapper1}>

            {/* <div className={styles2.booked_box}> */}
            <h1>Booked  Property</h1>
            <button className={styles.form_button} onClick={GettBookedProperty}>Get Booked Property</button>
            {bookedPropertyLocation && bookedPropertyAddress ? (
              <>
            <input className={styles.form_inputs} value={bookedPropertyLocation || ""}  type="text" />
            <input className={styles.form_inputs} value={bookedPropertyAddress || ""}  type="text" />
      
            </>
      ) : (
        <h1>No Properties Booked</h1>
      )}
            {/* <img alt="test" src="/images/cartoon.png"  /> */}
            {/* </div> */}
            </div>
    </div>
    <div className={styles2.profile_bottom_box}>

      <img alt="test" src="/images/book.png"  />
        <p>This section provides real-time information editing
        </p>
    </div>

</div>
    )} 

export default Profile