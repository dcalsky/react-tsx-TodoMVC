import * as React from 'react';

interface HeaderProps {
  addTodo(val: string): void
}

export default class Header extends React.Component<HeaderProps, {}> {
  state = {
    todoValue: ''
  }
  constructor(props: any) {
    super(props)
  }
  handleChange = (e: any): void => {
    this.setState({
      todoValue: e.target.value
    })
  }
  handlePress = (e: any): void => {
    if (e.key === 'Enter' && this.state.todoValue) {
      this.setState({
        todoValue: ''
      })
      this.props.addTodo(this.state.todoValue)
    }
  }
  render() {
    return (
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" value={this.state.todoValue}  onChange={this.handleChange} onKeyPress={this.handlePress} />
        </header>
    )
  }
}
