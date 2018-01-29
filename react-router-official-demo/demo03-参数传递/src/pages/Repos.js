import React,{Component} from 'react';


export default class Repos extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h4>{this.props.params}</h4>
            </div>
        )
    }


}