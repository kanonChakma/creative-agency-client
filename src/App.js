import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import { createContext } from 'react';
import NotFound from './Component/NotFound/NotFound';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Users from './Component/Users/Users/Users';
import Review from './Component/Users/Review/Review';
import Userservice from './Component/Users/Userservice/Userservice';
import Makeadmin from './Component/Dashboard/Makeadmin/Makeadmin';
import Addservice from './Component/Dashboard/Addservice/Addservice';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'
export const userContext=createContext()
function App() {
  const[signInUser,setSignInUser]=useState({})
  return (
    <userContext.Provider value={[signInUser,setSignInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
                <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/user">
                <Users></Users>
            </PrivateRoute>
            <Route path="/review">
               <Review></Review>
            </Route>
            <PrivateRoute path="/userservice">
                <Userservice></Userservice>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
               <Makeadmin></Makeadmin>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
             <Addservice></Addservice>
            </PrivateRoute>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="*">
                  <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
    </userContext.Provider>
  );
}
export default App;
