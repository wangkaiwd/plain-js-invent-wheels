/**
 * 封装导航连接，并添加激活样式
 *
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {render} from 'react-dom';

export default class NavLink extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Link {...this.props} activeClassName='active'></Link>
            </div>
        )
    }
}