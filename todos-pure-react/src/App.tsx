import * as React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { Todo, TodoStatus } from './Todo';

class App extends React.Component<{}, {}> {
  state = {
    todos: []
  }
  constructor() {
    super()
  }
  addTodo = (todo: Todo): void => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  toggleTodo = (index: number, all: boolean = false): void => {
    this.setState({
      todos: this.state.todos.map((todo: Todo, i: number) => {
        if (all || index === i) {
          todo.status = todo.status === TodoStatus.actived ? TodoStatus.completed : TodoStatus.actived
        }
        return todo
      })
    })
  }
  filterTodos = (status: TodoStatus | string): void => {
    if (status === 'all') {
      this.setState({
        todos: this.state.todos.map((todo: Todo) => {
          todo.visible = true
          return todo
        })
      })
    } else {
      this.setState({
        todos: this.state.todos.map((todo: Todo) => {
          todo.visible = todo.status === status
          return todo
        })
      })
    }
  }
  editTodo = (index: number): void => {
    this.setState({
      todos: this.state.todos.map((todo: Todo, i: number) => {
        todo.editing = i === index
        return todo
      })
    })
  }
  updateTodo = (index: number, val: string): void => {
    this.setState({
      todos: this.state.todos.map((todo: Todo, i: number) => {
        if (i === index) {
          todo.val = val
          todo.editing = false
        }
        return todo
      })
    })
  }
  clearTodo = (index: number): void => {
    console.log(index)
    this.setState({
      todos: this.state.todos.filter((todo: Todo, i: number) => {
        return i !== index
      })
    })
  }
  clearCompletedTodos = (): void => {
    this.setState({
      todos: this.state.todos.filter((todo: Todo) => {
        return todo.status !== TodoStatus.completed
      })
    })
  }
  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <Main todos={this.state.todos} toggleTodo={this.toggleTodo} editTodo={this.editTodo} updateTodo={this.updateTodo} clearTodo={this.clearTodo}/>
        <Footer todoCount={this.state.todos.length} filterTodos={this.filterTodos} clearCompletedTodos={this.clearCompletedTodos} />
      </section>
    );
  }
}

export default App;
