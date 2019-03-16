import React from 'react'
import {Routes} from "../utils/Routes";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from "./landingpage/landingpage";
import "animate.css/animate.min.css";

export const App = () => {
    return (
        <React.Fragment>
            <Route exact path={'/'}
                   render={ () => (
                       <LandingPage/>
                   )}
            />
            <Routes/>
        </React.Fragment>
    )
};
