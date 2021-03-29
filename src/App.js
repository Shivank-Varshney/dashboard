import React from "react";
import Dashboard from "./assets/component/Dashboard";
import Team from "./assets/component/Team";
import Income from "./assets/component/Income";
import PaymentHistory from "./assets/component/PaymentHistory";
import ContactUs from "./assets/component/ContactUs";
import FreeLink from "./assets/component/FreeLink";
import Navbar from "./assets/component/Navbar";
import {Redirect, Route, Switch } from 'react-router-dom'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return(
    <React.Fragment>
        <Navbar/> 
        <Switch> 
            <Route exact path='/' component={Dashboard} /> 
            <Route exact path='/team' component={Team} />
            <Route exact path='/income' component={Income} /> 
            <Route exact path='/paymenthistory' component={PaymentHistory} /> 
            <Route exact path='/contactus' component={ContactUs} /> 
            <Route exact path='/freelink' component={FreeLink} /> 
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
  );
}

export default App;
