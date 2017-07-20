import * as React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import {Todo} from './Todo'

class App extends React.Component<{}, {}> {
  state = {
    todos: []
  }
  constructor() {
    super()
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(todo: Todo): void {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
    console.log(this.state)
  }
  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <Main todos={this.state.todos} />
        <Footer />
      </section>
    );
  }
}

export default App;
