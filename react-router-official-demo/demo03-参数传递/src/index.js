import React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router'; 
import routes from './router/routes';


// 点击toAbout加载对应的About组件
// 点击toApeo加载对应的Apeo
render(
    <Router routes={routes} history={hashHistory}></Router>,
    document.getElementById('app')
);




