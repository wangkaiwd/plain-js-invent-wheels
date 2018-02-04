import React, {
    Component
} from 'react';
import {
    render
} from 'react-dom';

class Dog extends Component {
    constructor() {
        super()
        // 通过bind在构造函数中改变this的指向
        this.handleClick = this.handleClick.bind(this);

        this.handleParams = this.handleParams.bind(this, 5);
    }
    handleClick() {
        // 如果不进行this指向的处理为undefined
        // console.log(this);

        // 通过bind方式绑定事件对象以及更多的参数被隐式的传递
        // 比如event，并不需要进行参数的传递，就可以直接在函数中使用

        // 通过箭头函数绑定事件，事件参数必须进行显式的传递
        console.log(this, event);
    }
    handleClickExtra() {
        console.log(this);
    }
    handleParams(id, e) {
        // 如果说event比较长，我们想传入形参e，事件对象e要排在所传递参数的后面
        // 这里必须要在id的后面传入
        console.log(id);
        console.log(e);
        // 我们传入的e.target为事件对象的一些属性和方法
        // event事件对象 是 e.target里的内容
    }
    render() {
        // 当要渲染的jsx代码为多行时，return 的内容最好使用()括起来
        return (
            <div>
                {/* 这里this的指向为undefined或者null,因为绑定事件时函数的调用方法并不是以
                    对象的方法来调用的
                */}
                {/* 
                    解决方法：1. 通过箭头函数解决this指向
                             2. 通过bind方法改变函数的this指向
                */}
                <h1 onClick={this.handleClick}>Dog</h1>
                <h2 onClick={() => this.handleClickExtra()}>Cat</h2>
                {/* 
                    function handleClickExtra() {
                        return this.handleClickExtra();
                    }
                */}
                <h3 onClick={this.handleParams}>birds</h3>
            </div>
        )
    }
}

// 使用bind绑定事件时不用加括号的原因：
// 1. 如果加括号的话会直接执行，并不是在点击的时候触发
// 2. 这里绑定的是一个函数，并不是一个函数的执行


render(<Dog />, document.getElementById('box'))