import { Link } from 'react-router-dom';
import './Navbar.css';
import dog_logo from '../images/sss.png'
import React from "react"
import Reacat, {useEffect, useState} from "react"
import {authenticationService} from "./service/auth-service";

export default function Navbar() {
    
  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(() => {
    authenticationService.currentUser.subscribe(x => setLoggedInUser(x));
    let u = JSON.parse(localStorage.getItem("currentUser"));
    setLoggedInUser(u);
}, []);

function handleLogout(){
  authenticationService.logout();
}

  return (
    <div>
      <nav className='navbar'>

        <div className='navbar-container'>

          <ul className='nav-menu'>
        
                  <Link to='/' className='navbar-logo'>
                  <img src={dog_logo} alt="React Logo" className="logo" />
                  </Link>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links'> Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/accomodations' className='nav-links'> Accomodations</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/profile' className='nav-links'> Profile</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/blog' className='nav-links'> Blog</Link>
                  </li>
                  {!loggedInUser &&
                  <li className='nav-item'>
                    <Link to='/loginpage' className='nav-links'> Login</Link>
                  </li>
                  }
                  {!loggedInUser &&
                  <li className='nav-item'>
                    <Link to='/registerpage' className='nav-links'> Register</Link>
                  </li>
                  }
                  {loggedInUser &&
                  <li className='nav-item'>
                      <button className='nav-links' onClick={handleLogout}> Logout</button>
                  </li>
              }
          </ul>
        </div>

      </nav>

    </div>
    
  );
}


