/// <reference path="../interfaces.d.ts" />
import {createAction} from 'redux-actions'
import {
  ADD,
  CLEAR,
  CLEAR_COMPLETED,
  UPDATE,
  FINISH
} from './TodoActionTypes'


export const addTodo = createAction(ADD, (val: string) => val)
export const clearTodo = createAction(CLEAR, (id: number) => id)
export const clearCompletedTodos = createAction(CLEAR_COMPLETED)
export const updateTodo = createAction(UPDATE, (id: number, val: string) => ({id, val}))
export const finishTodo = createAction(FINISH, (id: number) => id)
