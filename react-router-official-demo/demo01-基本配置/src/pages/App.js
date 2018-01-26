import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>react-router demo</h1>
                <ul>
                    <li><Link to='/about'>关于</Link></li>
                    <li><Link to='/repo'>仓库</Link></li>
                </ul>
                {/* this.props.children在路由中对应的子组件,当路径为根路径'/'null */}
                {/* 根组件为App，当加载根组件时要有一个默认显示的子组件(Index) */}
                {this.props.children}
            </div>
        )
    }
    componentWillMount() {
        console.log(this.props.children);
    }
}