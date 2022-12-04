import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import './styles.css'

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import  { useState } from "react";
// import LoginForm from "./components/LoginForm";
// import LoginForm from "./components/LoginForm";

import Home from './components/pages/Home';
import Accomodations from './components/pages/Accomodations';
import Profile from './components/pages/Profile';
import Blog from './components/pages/Blog';
// import "bootstrap/dist/css/bootstrap.min.css"
// import Register from './components/register';
import Login from './components/login';
// import "bootstrap/dist/css/bootstrap.min.css"

// import "bootstrap/dist/js/bootstrap.min.js"

// import "./styles.css";
export default function App(){
    const [isShowLogin, setIsShowLogin] = useState(true);

    const handleLoginClick = () => {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    };
    const [isShowRegister, setIsShowRegister] = useState(true);

    const handleRegisterClick = () => {
      setIsShowRegister((isShowRegister) => !isShowRegister);
    };
    return (
    <div>
        <Router >
        {/* <Navbar/> */}
        <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick} />
        <Login isShowLogin={isShowLogin} />
        {/* <Register isShowRegister={isShowRegister} /> */}
        
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/accomodations' exact component={Accomodations}/>
                    <Route path='/profile' exact component={Profile}/>
                    <Route path='/blog' exact component={Blog}/>
                </Switch>
                
        </Router>
        <Footer/>
          
    </div>
    );
}