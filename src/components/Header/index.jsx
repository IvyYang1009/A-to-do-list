import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css'

export default class Header extends Component {
    //对接收的props进行类型必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    //获取键盘事件
    handleKeyUp = (event) => {
        //解构
        const { keyCode, target } = event;
        //判断是否是回车按键
        if (keyCode !== 13) return;
        // console.log(target.value);
        if (target.value.trim() === "") {
            alert('输入不能为空');
            return;
        }
        //准备一个todo对象
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj);
        //清空输入
        target.value = "";
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}


