import { Link } from 'react-router-dom';
import './Navbar.css';
import dog_logo from '../images/sss.png'
import React from "react"



export default function Navbar() {

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
                  <li className='nav-item'>
                    <Link to='/loginpage' className='nav-links'> Login</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/registerpage' className='nav-links'> Register</Link>
                  </li>
           
          </ul>
        </div>

      </nav>

    </div>
    
  );
}


