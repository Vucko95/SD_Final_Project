import styles from '../styles/Forms.module.css'
import styles2 from '../styles/Profile.module.css'

import { useEffect, useState, ReactElement } from 'react'
import cv2 from '../public/images/cv2.png'
const Profile = () => { 

    const [user, setUser] = useState<User | null>(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const [updateMessageProperty, setUpdateMessageProperty] = useState('');
    const [updateUserr, setUpdatUserr] = useState('');


    const [addProperty, setaddProperty] = useState('');
    const [addPropertyAddress, setaddPropertyAddress] = useState('');
    const [addPropertyLocation, setaddPropertyLocation] = useState('');

    const [bookedPropertyLocation, setPropertyLocation] = useState<string | null>(null);
    const [bookedPropertyAddress, setPropertyAddress] = useState<string | null>(null);

    const getUser = async () => {
      const user_id = sessionStorage.getItem('user_id');
      if (user_id) {
    
        console.log(user_id)
 
        const res = await fetch('http://localhost:8090/api/v1/users/' + user_id);
        const data = await res.json();
        console.log(data.property)
     
        setUser(data as User);
         if (data.property == null) {
          console.log("NO Property")
          setaddProperty('Display Add Property')
         }
      }
      else {
        setUpdatUserr('Please Login First to display information');
      }
    }
  
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
      
        setUser({ ...user, property: data });
          console.log(data)
          setUpdateMessageProperty('Property updated');
      
        }
      }

      const AddPropertytoUser = async () => {
        const user_id = sessionStorage.getItem('user_id');
        if (user) {
          console.log('Testing')
          console.log(addPropertyAddress,addPropertyLocation )
          const addUserProperty = {
            propertyLocation: addPropertyAddress,
            propertyAddress: addPropertyLocation,
          };
          const res = await fetch('http://localhost:8090/api/v1/users/' + user_id + '/property', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addUserProperty),
          });
          const data = await res.json();
 
          console.log(data)

        }
      }
 
      
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
      



    return (
        
<div  className={styles2.profilecontent}>
    <div className={styles2.title_box}>


    </div>

    <div className={styles2.wrapper_parent}>
            <div className={styles2.wrapper_left_pic}>
            
            <img alt="test" src="/images/dog_left2.png"  />
            </div>
            <div className={styles2.wrapper1}>
        
                <h1>Edit Profile</h1>
                   <div ><h3>{updateUserr}</h3></div>
         


                <div>
    <button className={styles.form_button} onClick={getUser}>Display User Info</button>
    {user && (
            <div>
          
                <br />
                <input className={styles.form_inputs} value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" placeholder='Username' />
        
                <form  action="#">
      
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
                    <input className={styles.form_inputs} value={user.property.propertyLocation} onChange={(e) => setUser({ ...user, property: { ...user.property, propertyLocation: e.target.value } })} type="text" placeholder='LastName' />
                    <input className={styles.form_inputs} value={user.property.propertyAddress} onChange={(e) => setUser({ ...user, property: { ...user.property, propertyAddress: e.target.value } })} type="text" placeholder='Email' />
                    <button onClick={updateUserProperty} className={styles.form_button} >Update Property Info</button>
                    <div ><h2>{updateMessageProperty}</h2></div>
                    </form>
                </>
                )}
            </div>
                )}
                </div>

                           
            </div>
                  <div>

            {addProperty  ? (
              <>
            <div className={styles2.wrapper1}>

       
            <h1>Add  Property</h1>
  
            <input className={styles.form_inputs} id="addpropertylocation"    defaultValue={addPropertyAddress}  type="text" onChange={(event) => setaddPropertyAddress(event.target.value)} />
            <input className={styles.form_inputs} id="addpropertylocationh"   defaultValue={addPropertyLocation}  type="text" onChange={(event) => setaddPropertyLocation(event.target.value)} />
            <button className={styles.form_button} onClick={AddPropertytoUser}>Add Property</button>
        </div>
            </>
      ) : (
        <h4 ></h4>
        )}
        </div>


            <div className={styles2.wrapper1}>

        
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