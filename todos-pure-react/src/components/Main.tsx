import * as React from 'react';
import { Todo, TodoStatus } from '../Todo';
const cx = require('classnames')


interface MainProps {
  todos: Todo[],
  toggleTodo(i: number): void
  editTodo(i: number): void
  updateTodo(i: number, v: string): void
  clearTodo(i: number): void
}

export default class Main extends React.Component<MainProps, {}> {
  state = {
    todoValue: ''
  }
  constructor(props: any) {
    super(props)
  }
  handleSelect = (index: number): void => {
    this.props.toggleTodo(index)
  }
  handleDoubleClick = (index: number): void => {
    this.props.editTodo(index)
    this.setState({
      todoValue: this.props.todos[index].val
    })
  }
  handleChange = (e: any): void => {
    this.setState({
      todoValue: e.target.value
    })
  }
  handleSubmit =(index: number): void => {
    this.props.updateTodo(index, this.state.todoValue)
  }
  handlePress = (index: number, e: any): void => {
    if (e.key === 'Enter' && this.state.todoValue) {
      this.handleSubmit(index)
    }
  }
  handleClear = (index: number): void => {
    this.props.clearTodo(index)
  }
  render() {
    return (
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => {
            if (!todo.visible) return null
            return (
              <li key={index} className={cx({completed: todo.status == TodoStatus.completed}, {editing: todo.editing})} >
                <div className="view">
                  <input className="toggle" type="checkbox" checked={todo.status === TodoStatus.completed} onChange={this.handleSelect.bind(this, index)} />
                  <label onDoubleClick={this.handleDoubleClick.bind(this, index)}>{todo.val}</label>
                  <button className="destroy" onClick={this.handleClear.bind(this, index)} />
                </div>
                {
                  todo.editing ?
                  <input 
                    className="edit" 
                    value={this.state.todoValue}
						        onBlur={this.handleSubmit.bind(this, index)}
                    onChange={this.handleChange}
                    onKeyPress={this.handlePress.bind(this, index)}
                    />
                  :
                  null
                }
              </li>
            )
          })}
				</ul>
			</section>
    )
  }
}
