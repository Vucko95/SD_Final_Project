import { Link } from 'react-router-dom';
import './Navbar.css';
import dog_logo from '../images/dog_logo.png'
// import Popout from './popout';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
// import Popup from './Popup';
export default function Navbar({ handleLoginClick, handleRegisterClick}) {
  const handleClick = () => {
    handleLoginClick();
  }
  const handleClick2 = () => {
    handleRegisterClick();
  }
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className='nav-menu'>
        
          <Link to='/' className='navbar-logo'>
          <img src={dog_logo} alt="React Logo" className="logo" />
            <i class='topic_name' />
          </Link>

            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                Home
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
            <div className="nav_buttons">
            <li className='nav-item'>

             <button onClick={handleClick}  type="button" class="btn-login btn btn-primary " data-toggle="modal" data-target="#exampleModalCenter">
       Login
         </button>

              </li>
            <li className='nav-item'>

             <button onClick={handleClick2}  type="button" class="btn-login btn btn-primary " data-toggle="modal" data-target="#exampleModalCenter">
       Register
         </button>

              </li>

            </div>

          </ul>
        </div>
      </nav>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}


