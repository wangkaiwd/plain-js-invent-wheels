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
            // {...this.props}:将this.props对象里的所有属性和属性值
            //    都对应写到Link标签中，作为Link的属性
            <Link {...this.props} activeClassName="active"></Link>
        );
    }
    componentWillMount() {
    }
}