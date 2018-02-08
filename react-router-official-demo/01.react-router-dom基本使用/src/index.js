import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { render } from 'react-dom';


// 定义组件
const Home = () => {
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}


const User = () => {
    return (
        <div>
            <h2>用户</h2>
        </div>
    )
}

const Init = () => {
    return (
        <div>
            <h3>初始数据</h3>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <div className="header">
                        <ul>
                            <li><Link to='/home'>to home</Link></li>
                            <li><Link to='/user'>to user</Link></li>
                        </ul>
                    </div>
                    {/* 根路径'/'会一直默认匹配 设为exact（精确匹配）之后，只有当路径为'/'时才会显示Init组件
                        当为'/home'、'/user'时不会进行匹配'/'
                    */}
                    {/* 默认为模糊匹配，只要锚点中是以这个path开头的，组件就会呈现 */}
                    <Route exact path='/' component={Init}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/user' component={User}></Route>
                </div>
            </Router>
        </div>
    )
}

render(<App />, document.getElementById('box'))