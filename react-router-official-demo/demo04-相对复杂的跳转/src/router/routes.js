// react库
import React from 'react';
import {Route,IndexRoute} from 'react-router';

// 组件
import App from '../pages/App';
import Home from '../pages/Home';
import About from '../pages/About';
import Params from '../pages/Params';
import Repos from '../pages/Repos';


// 配置路由
export default (
    <Route path='/' component={App}>
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/repos' component={Repos}>
            <Route path='/repo/:resName' component={Params}></Route>
        </Route>
        {/* 进行路由参数的传递 */}
    </Route>
)

// 简单理解
// 这是一个2层嵌套路由：
// 1. 首先根据路径'/'匹配到App组件，在App组件中设置内容的链接，
//    通过this.props.children来确定所有子路由所加载组件需要放置的位置
// 2. App下有三个二级路由，分别是Home,About,Repos,点击对应的路由，加载对应
//    的组件，然后显示对应组件的内容
// 3. '/repos'匹配到Repos组件，这时点击Repos链接内容，会显示对应子路由Params中的内容
// 4. Params通过动态路由匹配，形参resName,通过真实的路由路径来传递实参，也通过this.props.children来控制
//    子路由加载的组件对应的放置位置。通过this.props.params来获取动态路由传递的参数


// NavLink是对导航组件的一个简单封装，设置激活样式