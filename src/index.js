import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter, Route, Switch} from 'react-router-dom'

const routes = (

    <HashRouter basename={'/'}>
        <div>teste modelo</div>
    </HashRouter>
)

ReactDOM.render(routes, document.getElementById("root"));
