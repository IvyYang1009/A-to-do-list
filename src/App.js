// import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';


export default class App extends Component {
  //初始化状态
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false }
    ]
  }
  //新增数据
  addTodo = (todoObj) => {
    //获取原来的todos
    const { todos } = this.state
    //追加一个todo形成一个新数组
    const newTodos = [todoObj, ...todos];
    //更新状态
    this.setState({ todos: newTodos })

  }

  //更新对象
  updateTodo = (id, done) => {
    //读取状态中的todos
    const { todos } = this.state;
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  //删除对象
  deleteTodo = (id) => {
    const { todos } = this.state;
    //删除指定id的对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    //更新状态
    this.setState({ todos: newTodos })
  }
  //全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    //遍历
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }
    })
    this.setState({ todos: newTodos })
  }
  //删除所有已完成项
  deleteAllDone = (done) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllDone={this.deleteAllDone} />
        </div>
      </div>
    );
  }
}


