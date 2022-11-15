import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Accomodations from './components/pages/Accomodations';
import Profile from './components/pages/Profile';
import Blog from './components/pages/Blog';
import "bootstrap/dist/css/bootstrap.min.css"
import Register from './components/register';
// import Login from './login';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


export default function App(){
    return (
    <div>
        <Router >
        <Navbar/>;
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/accomodations' exact component={Accomodations}/>
                    <Route path='/profile' exact component={Profile}/>
                    <Route path='/blog' exact component={Blog}/>
                </Switch>
        </Router>
    </div>
    );
}