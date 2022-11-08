
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            DogSurf
            <i class='topic_name' />
          </Link>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/accomodations'
                className='nav-links'
              >
                Accomodations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'

              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'

              >
                Blog
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar; 