
// 传参步骤
// 1. 定义父子组件
// 2. 引入prop-types
// 3. 定义父组件的传参函数（这里是getChildContext）,将要传递给子组件的参数
//    作为返回值返回
// 4. 分别定义父子组件的传参与接受参数的规则(Son.contextTypes和Father.getChildrenTypes)


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
    this.context.testFn();
    // console.log(this.context);
  }
  render() {
    return (
      <div>
        <h1>son,父亲的年龄 {this.context.age}</h1>
        <button onClick={this.handleClick}>给父亲传值</button>
      </div>        
    )
  }
}

// 这里的function类型为：func
// 可以去官网查看PropTypes的类型
Son.contextTypes = {
  age: PropTypes.number,
  testFn: PropTypes.func
}

class Father extends React.Component {
  constructor(){
    super();
    this.state = {
      money: '并没有钱',
      age: 98
    };
    // this.changeMoney = this.changeMoney.bind(this);
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
        this.testFn();
      },
    }
  }
}
// 限制传递数据的格式
Father.childContextTypes = {
  age:PropTypes.number,
  testFn: PropTypes.func
};
ReactDOM.render(<Father />,document.getElementById('box'));
