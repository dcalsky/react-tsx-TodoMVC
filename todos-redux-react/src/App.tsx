
/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo, clearCompletedTodos, clearTodo, updateTodo, finishTodo } from './actions/TodoAction';
import Header from './components/Header';
import Footer from './components/Footer';

interface AppProps {
  todos: ITodo[],
  // addTodo(val: string): string,
  // clearCompletedTodos(): void,
  // clearTodo(id: number): number,
  // updateTodo(id: number, val: string): object,
  // finishTodo(id: number): number,
  dispatch: Dispatch<ITodo>
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { todos, dispatch } = this.props
    return (
      <section className="todoapp">
        <Header addTodo={(val: string) => {dispatch(addTodo(val))}}/>

        <Footer clearCompletedTodos={() => {dispatch(clearCompletedTodos())}} />
      </section>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos
})

// const mapDispatchToProps = (dispatch: any) => bindActionCreators({
//   addTodo,
//   updateTodo,
//   clearCompletedTodos,
//   clearTodo,
//   finishTodo
// }, dispatch)

export default connect(mapStateToProps)(App)
