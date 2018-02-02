import React,{Component} from 'react';
import NavLink from './NavLink';

export default class Repos extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to='/repo/ReactRouter'>React Router</NavLink></li>
                    <li><NavLink to='/repo/React'>React</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}