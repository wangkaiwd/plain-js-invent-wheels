// 1. 引包 react 和 react-dom
// 2. 定义一个 react 元素
// 3. 调用 react-dom中 的 render 方法,将2中的元素添加到DOM中
// import React from 'react'
// import ReactDOM from 'react-dom'


// let msg = '我是中国人，我爱自己的祖国'
// const element = (
//   <div>
//     <input value={msg}/>
//   </div>
// )
// // 使用value给input赋值，默认是只读的，不能修改
// ReactDOM.render(element, document.querySelector('#box'))

// setTimeout(function () {
//   msg = '你好吗'
//   const element = (
//     <div>
//       <input value={msg}/>
//     </div>
//   )
//   ReactDOM.render(element, document.querySelector('#box'))
// }, 3000)


import React from 'react';
import ReactDOM from 'react-dom';
// 限制传递内容的数据类型
import PropTypes from 'prop-types';

class Son extends React.Component {
  constructor(){
    super();
    this.state = {
      money: 998,
      
    };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    this.props.toSon(this.state.money);
    console.log(this.context);
  }
  render() {
    return (
      <div>
        <h1>son,父亲的年龄 {this.props.faAge}</h1>
        <button onClick={this.handleClick}>给父亲传值</button>
      </div>        
    )
  }
}
Son.contextTypes = {
  age: PropTypes.number,
  testFn: PropTypes.function
}

class Father extends React.Component {
  constructor(){
    super();
    this.state = {
      money: '并没有钱',
      age: 98
    };
    // this.changeMoney = this.changeMoney.bind(this,newMoney);
  }
  changeMoney(newMoney) {
    let money = this.state;
    money = newMoney;
    this.setState({
      money: money
    });
  }
  render() {
    return (
      <div>
        <h1>我是父组件,money:{this.state.money}</h1>
        <Son faAge={this.state.age}  toSon={(m)=>this.changeMoney(m)}></Son>
      </div>
    );
  }
  testFn() {
    window.alert('我被调用')
  }
  // 原型上定义方法，返回要传递给后代的数据
  getChildContext() {
    return {
      age: 18,
      testFn: () => {
        this.testFn()
      }
    }
  }
}
// 限制传递数据的格式
Father.childContextTypes = {
  age:PropTypes.number,
  testFn: PropTypes.function
};
ReactDOM.render(<Father />,document.getElementById('box'));
