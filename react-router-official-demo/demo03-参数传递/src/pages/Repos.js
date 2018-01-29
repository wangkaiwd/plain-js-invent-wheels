import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Repos extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <p>我是repos</p>
                <ul>
                    <li><Link to='/repo/react/react-router'>react-router</Link></li>
                    <li><Link to='/repo/facebook/react'>React</Link></li>
                </ul>
            </div>
        )
    }
}