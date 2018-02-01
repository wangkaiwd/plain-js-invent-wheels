import React,{Component} from 'react';
import {Link} from 'react-router';
import NavLink from '../pages/NavLink';

export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>路由配置</h2>
                {/* 可以控制子组件（路由关系）展示的位置 */}
                {this.props.children}
                <ul role='nav'>
                    <li><NavLink to='/about'>toAbout</NavLink></li>
                    <li><NavLink to='/repo'>toRepos</NavLink></li>
                </ul>
            </div>
        );
    }
}