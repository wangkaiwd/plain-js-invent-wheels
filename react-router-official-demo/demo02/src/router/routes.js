import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from '../pages/App';
import Repo from '../pages/Apeo';
import About from '../pages/About';


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Repo}></IndexRoute>
        <Route path='/about' component={About}></Route>
        <Route path='/repo' component={Repo}></Route>
    </Route>
)
