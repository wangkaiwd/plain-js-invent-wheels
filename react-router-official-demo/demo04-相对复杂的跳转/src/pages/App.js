import React, {Component} from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink';

export default class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h1>react-router</h1>
                <ul>
                    <li><NavLink to='/about'>about</NavLink></li>
                    <li><NavLink to='/home'>home</NavLink></li>
                    <li><NavLink to='/repos'>Repos</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}