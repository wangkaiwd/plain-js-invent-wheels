import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from '../pages/App';
import Repo from '../pages/Apeo';
import About from '../pages/About';
import Repos from '../pages/Repos';


// 定义路由匹配规则（只有完全匹配才会加载对应的组件）
// '/':加载App根组件，由于设置IndexRoute默认加载根组件下的Repo子组件
// '/about':加载About组件
// '/repo':加载Repos组件
// '/repo/:id/:name':此处name和id为形参，
        // 实参是在定义好的路由中传递，此处定义好的路由为
            // 1. /repo/react/react-router 即对应实参为 react和react-router
            // 2. /repo/facebook/react                facebook和react

// 获取参数的方法：this.props.params.'自己定义好的形参'


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Repo}></IndexRoute>
        <Route path='/about' component={About}></Route>
        <Route path='/repo' component={Repos}></Route>
        <Route path='/repo/:id/:name' component={Repo}></Route>
    </Route>
)