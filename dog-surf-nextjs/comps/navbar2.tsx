import Link from 'next/link';
import React from "react";
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Cookies  from "js-cookie";
// import { setCookie } from 'next-cookies';
import cookie from "cookie";
// import { getCookie } from '../pages/coookies'
// import { setCookie } from '../pages/coookies'
const Navbar = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [username, setUsername] = React.useState(getCookie("username"));
    // const cookies = cookie.parse(cookieString);

    // useEffect(() => {
    //     const userCookie = cookie.get('user');
    //     if (userCookie === 'loggedIn') {
    //       setState({ isLoggedIn: true });
    //     }
    //   }, []);


//   function getCookie(name) {
//     return Cookies.get(name);
//   }

//   const [username, setUsername] = React.useState(getCookie("username"));

//   function handleLogout() {
//     Cookies.remove("username");
//     setUsername("");
//   }



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



 {username ? (
        <p>
          Welcome, {username}{" "}
          <button onClick={handleLogout}>Logout</button>
        </p>
      ) : (
        // <div>
    
        //   <button onClick={() => setUsername("Guest")}>Continue as guest</button>
        // </div>

        <div className={styles.navadditionals}>
        <Link href="/login/">Login</Link>   
        <Link href="/register/">Register</Link>
   
        </div>
      )}



      </div>
    </nav>
);
}
 
export default Navbar;