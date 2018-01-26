import React from 'react';
import {render} from 'react-dom';
// hashHistory:根据地址对应的hash值进行路由的跳转
import {Router,hashHistory} from 'react-router';
import routes from './router/routes';


render(
    <Router routes={routes} history={hashHistory}/>,
    document.querySelector('#app')
);