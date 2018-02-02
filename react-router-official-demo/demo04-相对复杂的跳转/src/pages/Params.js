import React,{Component} from 'react';

export default class Params extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h3>{this.props.params.resName}</h3>
            </div>
        )
    }
}