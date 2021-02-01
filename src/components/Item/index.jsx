import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    state = {mouse: false}//标识鼠标移入移出

    //鼠标移入移出
    handleMouse = (flag) => {
      return () => {
        this.setState({mouse:flag})
        // console.log(flag)
      }
    }
    //处理勾选状态
    handleCheck = (id) => {
        return(event) => {
          this.props.updateTodo(id,event.target.checked)
        }
    }
    //处理删除
    handleDelete = (id) => {
      if(window.confirm('确定删除此项吗？')) {
        this.props.deleteTodo(id)
      }
      
    }
    render() {
      const {mouse} = this.state
      const {id,name, done} = this.props
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseOver={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
              <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
              </label>
              <button className="btn btn-danger" onClick={() => {this.handleDelete(id)}} style={{display: mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}
