import React from 'react';
import {Route,IndexRoute} from 'react-router';
import About from '../pages/About';
import Repo from '../pages/Repo';
import App from '../pages/App';

module.exports = (
    <Route>
        <Route path='/' component={App}>
            {/* 这里路径不用写，是根路径 */}
            <IndexRoute component={About}></IndexRoute>
            {/* 当是根路径的时候，默认加载About子组件 */}
            <Route path='/about' component={About}></Route>
            <Route path='/repo' component={Repo}></Route>
        </Route> 
    </Route>
)
