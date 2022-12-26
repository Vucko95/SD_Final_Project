import Link from 'next/link';
import React from "react";
import styles from '../styles/Navbar.module.css'
import Cookies  from "js-cookie";
import { useRouter } from 'next/router';
import { useState, useEffect  } from 'react';
// import { getCookieValue } from '../pages/api/coookies'
// import { setCookie } from '../pages/coookies'
const Navbar = () => {
  
  const [username, setUsername] = useState('');
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  // const getCookieValue = (name) => (
  //   document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  // )

  // function getCookie(name) {
  //   return Cookies.get(name);
  // }
  const handleLogoutClick = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user_id');
    setShowLogoutButton(false);
  };
  // useEffect(() => {
  //   const storedUsername = sessionStorage.getItem('username');
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //     setShowLogoutButton(true);
  //   }
  // }, []);
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setShowLogoutButton(true);
    }
  }, [username]);

  // const [username, setUsername] = React.useState(getCookie("username"));
  // const test = getCookie('username');
  // console.log(test)
  // function handleLogout() {
  //   Cookies.remove("username");
  //   setUsername("");
  // }



  return (
    <nav>
      <div className={styles.navcontent}>
    
          <div className={styles.logo}>
            <h3>Dog Surf</h3>
            
          </div>

        {/* <div className={styles.nav_middle_elements}> */}
          <div className={styles.nav_1nd_dog_pic}>
              <img alt="test" src="/images/right.png"  />
         </div>

         <div className={styles.nav_links}>
          <Link href="/home">Home</Link>
          <Link href="/accomodation">Accomodation</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <div className={styles.nav_2nd_dog_pic}>
          <img alt="test" src="/images/left.png"  />
        </div>
   



 {/* <button onClick={() => setCount(count+1)}></button> */}



 {/* {username ? (
        <p>
          Welcome, {username}{" "}
          <button onClick={handleLogout}>Logout</button>
        </p>
      ) : (


        <div className={styles.navadditionals}>
        <Link href="/login/">Login</Link>   
        <Link href="/register/">Register</Link>
   
        </div>
      )} */}
  
  
  
  <div className={styles.navadditionals}>
  {!showLogoutButton && (
        <div className={styles.navadditionals}>
        <Link href="/login/">Login</Link>   
        <Link href="/register/">Register</Link>
   
        </div>
      
        )}
        {showLogoutButton && (
          <div className={styles.navadditionalslogout}>
         <p>    {username}  </p>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        )} 
        </div>


      </div>
    </nav>
);
}
 
export default Navbar;