/// <reference path="../interfaces.d.ts"/>

import { ADD, CLEAR, CLEAR_COMPLETED, UPDATE, FINISH } from '../actions/TodoActionTypes';
import { handleActions, Action } from 'redux-actions'

interface IState {
  todos: Array<ITodo>
}

const initialState: IState = {
  todos: []
}

export default handleActions({
  [ADD]: (state: IState, action: Action<string>): IState => ({
    todos: [...state.todos, <ITodo>{
      id: state.todos.length,
      val: action.payload,
      status: TodoStatus.actived
    }]
  }),
  [UPDATE]: (state: IState, action: any): IState => ({
    todos: state.todos.map((todo: ITodo) => {
      if (todo.id === action.payload.id) {
        todo.val = action.payload.val
      }
      return todo
    })
  }),
  [CLEAR]: (state: IState, action: Action<number>): IState => ({
    todos: state.todos.filter((todo: ITodo) => todo.id != action.payload
  )
  }),
  [CLEAR_COMPLETED]: (state: IState): IState => ({
    todos: state.todos.filter((todo: ITodo) => todo.status != TodoStatus.completed
  ),
  [FINISH]: (state: IState, action: Action<number>) => ({
    todos: state.todos.map((todo: ITodo) => {
      if (todo.id == action.payload) {
        todo.status = TodoStatus.completed
      }
      return todo
    })
  })
  })
}, initialState);
