import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

import Accomodations from './components/pages/Accomodations';
import Profile from './components/pages/Profile';
import Blog from './components/pages/Blog';

function App(){
    return (
    <>
        <Router >
        <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/' exact component={Accomodations}/>
                    <Route path='/' exact component={Profile}/>
                    <Route path='/' exact component={Blog}/>
                </Switch>
        </Router>
       
    </>
    );
}

export default App;