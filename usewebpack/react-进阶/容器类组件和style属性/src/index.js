import React,{Component} from 'react';
import {render} from 'react-dom';
import './style.css' 

class BlackBorderContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>BlackBorderContainer</h2>
                {/* this.props.children.map((children) => {
                    <div className="border">{children}</div>
                }) */}
                {
                    this.props.children.map((children,index) => <div key={index} className="border">{children}</div>)
                }
            </div>
        )
    }
}

// 组件中嵌套的内容通过this.props.children进行在组件内展示
// 也可以通过类似this.props.children[0]将某个单独的组件内容选出来进行展示
render(
    <BlackBorderContainer>
        <div className="name">MyName: Lucy</div>
        <p className="age">
            MyAge: <span>12</span>
        </p>
    </BlackBorderContainer>,
    document.getElementById('box')
) 