import React,{Component} from 'react';
import {Link} from 'react-router';

export default class NavLink extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            // 添加激活样式
            <Link {...this.props} activeClassName="active"></Link>
        );
    }
}