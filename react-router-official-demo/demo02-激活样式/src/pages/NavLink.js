import React,{Component} from 'react';
import {Link} from 'react-router';

// 封装导航链接
export default class NavLink extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            // 添加激活样式
            // this.props:this.props
            <Link {...this.props} activeClassName="active"></Link>
        );
    }
    componentWillMount() {
    }
}