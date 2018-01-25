import React from 'react';
import {Component} from 'react-dom';
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
                    <li><Link to='/repos'>仓库</Link></li>
                </ul>
            </div>
        )
    }



}