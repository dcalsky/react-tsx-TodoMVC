import * as React from 'react';
import { Todo, TodoStatus } from '../Todo';

interface HeaderProps {
  addTodo(val: Todo): void
}

export default class Header extends React.Component<HeaderProps, {}> {
  state = {
    todoValue: ''
  }
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }
  handleChange(e: any): void {
    this.setState({
      todoValue: e.target.value
    })
  }
  handlePress(e: any): void {
    if (e.key === 'Enter' && this.state.todoValue) {
      this.setState({
        todoValue: ''
      })
      this.addTodo(this.state.todoValue)
    }
  }
  addTodo(val: string): void {
    this.props.addTodo({
      val: val,
      status: TodoStatus.doing,
      selected: false
    })
  }
  render() {
    return (
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" value={this.state.todoValue}   onChange={this.handleChange} onKeyPress={this.handlePress} />
        </header>
    )
  }
}