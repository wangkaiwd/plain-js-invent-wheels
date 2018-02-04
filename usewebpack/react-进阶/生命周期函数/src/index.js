import React, {
    Component
} from 'react';
import {
    render
} from 'react-dom';

// class Life extends Component {
//     constructor() {
//         super()
//         console.log('construct');
//     }

//     componentWillMount() {
//         console.log('component will mount');
//     }

//     componentDidMount() {
//         console.log('component did mount');
//     }

//     render() {
//         console.log('render');
//         return (
//             <div>
//                 生命周期函数
//             </div>
//         )
//     }
// }

// render(<Life />,document.querySelector('#box'))
// componentWillMount:组件挂载开始之前（组件在调用render渲染DOM之前）
// componentDidMount: 组件挂载完成之后（组件调用render将DOM插入页面之后）
// componentWillUnmount:组件对应的DOM元素从页面中删除之前调用(注意：mount中的m是小写)
class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
        }
    }
    componentWillMount() {
        this.timer = null;
        this.timer = setInterval(
            () => this.setState({date: new Date()}), 
        1000);
    }
    // 组件对应的DOM元素从页面中删除之前调用，清除定时器，否则定时器会一直运行
    // this.setState在组件删除后继续调用会报错
    componentWillUnmount() {
        clearInterval(this.timer);   
    }
    render() {
        return (
            <div>
                <h1>现在的时间是：</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

// 组件名必须大写
class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowClock: true
        }
    }
    handleShowOrHide() {
        this.setState({isShowClock: !this.state.isShowClock})
    }
    render() {
        return (
            <div>
                {this.state.isShowClock && <Clock />}
                <button 
                    onClick={() => this.handleShowOrHide()}>
                        {this.state.isShowClock? '隐藏': '显示'}
                </button>
            </div>
        )
    }
}
// 点击按钮将组件销毁之后，由于在子组件<Clock />

render(<Index/>,document.getElementById('box'))

// constructor:state的初始化工作
// componentWillMount:进行组件的启动工作，例如Ajax数据拉取，
//                    定时器的启动
// componentDidMount:组件的启动工作依赖DOM，如动画的启动
// componentWillUnmount: 组件从页面上销毁时进行一些数据的清理
// shouldComponentUpdate(nextProps,nextState): 控制组件是否重新渲染，
//      返回false组件不会进行重新渲染，react.js性能优化上非常有用
// componentWillReceiveProps(nextProps):组件从父组件接收到新的props之前调用
// componentWillUpdate: 组件开始重新渲染之前调用
// componentDidUpdate: 组件重新渲染并且把更改变更到真实的DOM以后调用