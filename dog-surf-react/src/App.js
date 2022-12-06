import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import './styles.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Accomodations from './components/pages/Accomodations';
import Profile from './components/pages/Profile';
import Blog from './components/pages/Blog';
import LoginPage from './components/pages/loginpage';
import RegisterPage from './components/pages/registerpage';

export default function App(){

    return (
    <div>
     
        <Router >

        <Navbar />
                {/* <Routes> */}
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/accomodations' exact component={Accomodations}/>
                    <Route path='/profile' exact component={Profile}/>
                    <Route path='/blog' exact component={Blog}/>
                    <Route path='/loginpage' exact component={LoginPage}/>
                    <Route path='/registerpage' exact component={RegisterPage}/>
                    </Switch>
                {/* </Routes> */}
        </Router>
                  
            
        <Footer/>
          
    </div>
    );
}