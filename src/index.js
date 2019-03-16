import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter, Route, Switch} from 'react-router-dom'
import {App} from "./components/app";
import "animate.css/animate.min.css";

const routes = (

    <HashRouter basename={'/'}>
        <App/>
    </HashRouter>
)

ReactDOM.render(routes, document.getElementById("root"));
