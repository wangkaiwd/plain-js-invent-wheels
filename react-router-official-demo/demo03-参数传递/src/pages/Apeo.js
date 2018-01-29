import React,{Component} from 'react';

export default class Apeo extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <h3>repo</h3>
                <ul>
                    <li>{this.props.params.id}</li>
                    <li>{this.props.params.name}</li>
                </ul>
            </div>
        );
    }
}