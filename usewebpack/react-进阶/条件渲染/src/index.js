import React,{Component} from 'react';
import {render} from 'react-dom';

// return null可以阻止组件渲染
// class WaringBanner extends Component {
//     constructor() {
//         super()
//     }
//     componentWillMount() {
//         this.handleWarning();
//     }
//     handleWarning() {
//         if(!this.props.warn) {
//             return null;
//         }
//     } 
//     render() {
//         return (
//             <div>
//                 warning
//             </div>
//         )
//     }
// }

class IfRender extends Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return (
            <div>
                <h1>条件渲染</h1>

                {/* 
                expression:表达式：
                    true && 内容      返回内容，显式内容
                    false && 内容     返回false，不显示内容
                    true || 内容      返回true，不显示内容
                    false || 内容     返回内容，显式内容
                */}
                {true && <p>&&的理解</p>}
            </div>
        )
    }
}

render(<IfRender />,document.getElementById('box'))